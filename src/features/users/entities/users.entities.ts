import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/BaseModel';
import { loginType, role } from '../../../core/enum/enum';

@Entity('users')
export class UsersEntities extends BaseModel {

  @Column({
    type: 'enum',
    enum: role,
    default: 'user',
  })
  role: role;

  @Column({ length: 64 })
  fullName: string;

  @Column({ length: 128, nullable: true })
  profileImage: string;

  @Column({ length: 64, unique: true })
  login: string;

  @Column({
    type: 'enum',
    enum: loginType,
  })
  loginType: loginType;

  @Column({ length: 128, nullable: true })
  password: string;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: false })
  isActive: boolean;
}