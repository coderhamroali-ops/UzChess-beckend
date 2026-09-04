import { Injectable } from '@nestjs/common';
import { CreateOtpCodesRequest } from './create-otpCodes.request';
import { OtpCodesEntity } from '../../../entities/otpCodes.entities';

@Injectable()
export class CreateOtpCodesHandler {
  async execute(payload: CreateOtpCodesRequest) {
    const newOtpCode = {
      userId: payload.userId,
      code: payload.code,
      date: payload.date,
      type: payload.type,
    } as OtpCodesEntity;

    return await OtpCodesEntity.save(newOtpCode);
  }
}