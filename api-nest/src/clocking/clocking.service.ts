import { Injectable } from '@nestjs/common';
import { CreateClockingDto } from './dto/create-clocking.dto';
import { UpdateClockingDto } from './dto/update-clocking.dto';
import { SearchClockingDto } from './dto/search-clocking.dto';
import { PrismaService } from '@utils/prisma.service';
import { Clocking, Prisma, User } from '@prisma/client';

@Injectable()
export class ClockingService extends PrismaService {
  async create(createClockingDto: CreateClockingDto, loginUser: User) {
    //TODO データのバリデーション
    if (createClockingDto.type === 'start') {
      //出勤
      const todayClocking = await this.prisma.clocking.findFirst({
        where: {
          user_id: loginUser.id,
          day: new Date(createClockingDto.day),
        },
      });
      //出勤済みならエラー
      if (todayClocking) {
        throw new Error('出勤済みです');
      }
      return this.prisma.clocking.create({
        data: {
          day: new Date(createClockingDto.day),
          start_time: new Date(createClockingDto.time),
          user: {
            connect: {
              id: loginUser.id,
            },
          },
          break_time: 60,
          note: '',
        },
      });
    } else {
      //退勤
      const todayClocking = await this.prisma.clocking.findFirst({
        where: {
          user_id: loginUser.id,
          day: new Date(createClockingDto.day),
        },
      });
      //未出勤ならエラー
      if (!todayClocking) {
        throw new Error('出勤していません');
      }
      //退勤済みならエラー
      if (todayClocking.end_time) {
        throw new Error('退勤済みです');
      }
      return this.prisma.clocking.update({
        where: {
          id: todayClocking.id,
        },
        data: {
          end_time: new Date(createClockingDto.time),
        },
      });
    }
  }

  async update(id: number, updateClockingDto: UpdateClockingDto) {
    // 勤怠情報を更新する
    const todayClocking = await this.prisma.clocking.findUnique({
      where: {
        id: id,
      },
    });
    return this.prisma.clocking.update({
      where: {
        id: todayClocking.id,
      },
      data: {
        start_time: new Date(updateClockingDto.start_time),
        end_time: new Date(updateClockingDto.end_time),
        break_time: updateClockingDto.break_time,
        note: updateClockingDto.note,
      },
    });
  }

  async search(searchClockingDto: SearchClockingDto, loginUser: User) {
    // 1か月分の打刻情報を検索する
    const todayClocking = await this.prisma.clocking.findMany({
      where: {
        user_id: loginUser.id,
        AND: [
          {
            day: {
              gte: new Date(searchClockingDto.start_day),
            },
          },
          {
            day: {
              lte: new Date(searchClockingDto.end_day),
            },
          },
        ],
      },
      orderBy: [
        {
          day: Prisma.SortOrder.desc,
        },
      ],
    });
    return todayClocking;
  }

  async findOne(day: string, loginUser: User): Promise<Clocking> {
    //その日の打刻情報を取得する
    const todayClocking: Clocking = await this.prisma.clocking.findFirst({
      where: {
        user_id: loginUser.id,
        day: new Date(day),
      },
    });
    console.log(todayClocking);
    return todayClocking;
  }
}
