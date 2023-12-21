import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClockingDto {
  @IsNotEmpty()
  @IsString()
  type: 'start' | 'end';

  @IsNotEmpty()
  @IsString()
  day: string;

  @IsNotEmpty()
  @IsString()
  time: string;
}
