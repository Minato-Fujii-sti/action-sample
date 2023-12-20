import { IsNotEmpty, IsString } from 'class-validator';

export class SearchClockingDto {
  @IsNotEmpty()
  @IsString()
  start_day: string;

  @IsNotEmpty()
  @IsString()
  end_day: string;
}
