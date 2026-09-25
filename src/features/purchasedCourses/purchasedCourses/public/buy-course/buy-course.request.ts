import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BuyCourseRequest {
  @ApiProperty()
  @IsInt()
  @Min(1)
  courseId: number;
}