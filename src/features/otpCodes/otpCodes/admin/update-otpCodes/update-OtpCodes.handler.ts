import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateOtpCodesRequest } from './update-OtpCodes.request';
import { OtpCodesEntity } from '../../../entities/otpCodes.entities';


@Injectable()
export class UpdateOtpCodesHandler {
  async execute(
    id: number,
    payload: UpdateOtpCodesRequest,
  ) {
    const otpCode = await OtpCodesEntity.findOne({
      where: { id },
    });

    if (!otpCode) {
      throw new NotFoundException('OTP code not found');
    }

    Object.assign(otpCode, payload);

    return await OtpCodesEntity.save(otpCode);
  }
}