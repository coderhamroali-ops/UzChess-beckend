import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, Min } from 'class-validator';

export class CreateUsersLessonsRequest {

  @ApiProperty()
  @IsInt()
  @Min(1)
  userId: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  courseLessonId: number;

  @ApiProperty({
    required: false,
  })
  @IsInt()
  @Min(0)
  stoppedAt?: number;

  @ApiProperty({
    default: false,
  })
  @IsBoolean()
  isCompleted: boolean;
}