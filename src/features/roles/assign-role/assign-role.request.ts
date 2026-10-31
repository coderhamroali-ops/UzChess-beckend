import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { role } from '../../../core/enum/enum';

export class AssignRoleRequest {
  @IsEnum(role)
  @ApiProperty({ enum: role })
  role: role;
}
