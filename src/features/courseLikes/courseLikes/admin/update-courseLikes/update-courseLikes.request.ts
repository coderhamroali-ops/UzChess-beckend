import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, Min } from 'class-validator';

export class UpdateCourseLikesRequest {

  @ApiProperty()
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  courseId: number;

  @ApiProperty()
  @IsDateString()
  created: string;
}