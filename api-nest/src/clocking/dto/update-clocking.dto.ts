import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class UpdateClockingDto {
  @IsNotEmpty()
  @IsString()
  type: 'start' | 'end';

  @IsNotEmpty()
  @IsString()
  day: string;

  @IsNotEmpty()
  @IsString()
  start_time: string;

  @IsNotEmpty()
  @IsString()
  end_time: string;

  @IsNotEmpty()
  @IsInt()
  @Min(16)
  break_time: number;

  @IsNotEmpty()
  @IsString()
  note: string;
}
