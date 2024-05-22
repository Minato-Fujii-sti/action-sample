import { Module } from '@nestjs/common';
import { ClockingService } from './clocking.service';
import { ClockingController } from './clocking.controller';

@Module({
  controllers: [ClockingController],
  providers: [ClockingService],
})
export class ClockingModule {}
