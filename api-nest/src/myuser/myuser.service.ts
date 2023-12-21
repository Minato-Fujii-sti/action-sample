import { Injectable } from '@nestjs/common';
import { CreateMyuserInput } from './dto/create-myuser.input';
import { UpdateMyuserInput } from './dto/update-myuser.input';
import { PrismaService } from '@utils/prisma.service';

@Injectable()
export class MyuserService extends PrismaService {
  create(createMyuserInput: CreateMyuserInput) {
    return `This action create a  myuser`;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({ where: { id: id } });
  }

  update(id: number, updateMyuserInput: UpdateMyuserInput) {
    return `This action updates a #${id} myuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} myuser`;
  }
}
