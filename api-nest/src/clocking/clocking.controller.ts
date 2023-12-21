import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Session,
  UseGuards,
} from '@nestjs/common';
import { ClockingService } from './clocking.service';
import { CreateClockingDto } from './dto/create-clocking.dto';
import { UpdateClockingDto } from './dto/update-clocking.dto';
import { SearchClockingDto } from './dto/search-clocking.dto';
import { sessionType } from '@utils/session-type';
import { LoginGuard } from '@utils/login-guard';

@Controller('clocking')
export class ClockingController {
  constructor(private readonly clockingService: ClockingService) {}

  @Get('search')
  @UseGuards(new LoginGuard())
  findAll(
    @Session() session: sessionType,
    @Body() searchClockingDto: SearchClockingDto,
  ) {
    return this.clockingService.search(searchClockingDto, session.login);
  }

  @Get(':day')
  @UseGuards(new LoginGuard())
  async findOne(@Session() session: sessionType, @Param('day') day: string) {
    return await this.clockingService.findOne(day, session.login);
  }

  @Post()
  @UseGuards(new LoginGuard())
  async create(
    @Session() session: sessionType,
    @Body() createClockingDto: CreateClockingDto,
  ) {
    return await this.clockingService.create(createClockingDto, session.login);
  }

  @Put(':id')
  @UseGuards(new LoginGuard())
  update(
    @Param('id') id: string,
    @Body() updateClockingDto: UpdateClockingDto,
  ) {
    return this.clockingService.update(+id, updateClockingDto);
  }
}
