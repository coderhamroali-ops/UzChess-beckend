import { Injectable, NotFoundException } from '@nestjs/common';
import { OtpCodesEntity } from '../../../entities/otpCodes.entities';

@Injectable()
export class DeleteOtpCodesHandler {
  async execute(id: number) {
    const otpCode = await OtpCodesEntity.findOne({
      where: { id },
    });

    if (!otpCode) {
      throw new NotFoundException('OTP code not found');
    }

    await OtpCodesEntity.remove(otpCode);

    return {
      message: 'OTP code deleted successfully',
    };
  }
}