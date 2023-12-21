import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Session,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user-dto';
import { sessionType } from '@utils/session-type';
import { LoginGuard } from '../utils/login-guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('login')
  @UseGuards(new LoginGuard())
  GetLogin(@Session() session: sessionType) {
    session.visits = session.visits ? session.visits + 1 : 1;
    return session.login;
  }

  @Post('login')
  async Login(
    @Session() session: sessionType,
    @Body() loginUserDto: LoginUserDto,
  ) {
    const result = await this.usersService.login(loginUserDto);
    session.login = result;
    return result;
  }

  @Post('logout')
  Logout(@Session() session: sessionType) {
    session.login = null;
    return 'logout';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
