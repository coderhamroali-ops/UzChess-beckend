import { Column, Entity } from 'typeorm';
import { otpType } from '../../../core/enum/enum';
import { BaseModel } from '../../../core/BaseModel';

@Entity('OtpCodes')
export class OtpCodesEntity extends BaseModel {

  @Column()
  userId: number;

  @Column({ length: 6 })
  code: string;

  @Column({ type: 'timestamp'})
  date: Date;

  @Column({ type: 'enum', enum: otpType })
  type: otpType;
}