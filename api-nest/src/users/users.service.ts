import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user-dto';
import { PrismaService } from '@utils/prisma.service';

@Injectable()
export class UsersService extends PrismaService {
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({ where: { id: id } });
  }

  async login(body: LoginUserDto) {
    console.log(body.user_id);
    console.log(body.password);
    const user = await this.prisma.user.findFirst({
      where: {
        user_id: body.user_id,
        password: body.password,
      },
    });
    console.log(user);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
