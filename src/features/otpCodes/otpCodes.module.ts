import { Module } from '@nestjs/common';
import { OtpCodesAdminController } from './otpCodes/admin/admin-otpCodes.controller';
import { CreateOtpCodesHandler } from './otpCodes/admin/create-otpCodes/create-otpCodes.handler';
import { GetAllOtpCodesHandler } from './otpCodes/admin/get-all-otpCodes/get-all-OtpCodes.handler';
import { UpdateOtpCodesHandler } from './otpCodes/admin/update-otpCodes/update-OtpCodes.handler';
import { DeleteOtpCodesHandler } from './otpCodes/admin/delete-otpCodes/delete-otCodes.handler';

@Module({
  controllers: [OtpCodesAdminController],

  providers: [
    CreateOtpCodesHandler,
    GetAllOtpCodesHandler,
    UpdateOtpCodesHandler,
    DeleteOtpCodesHandler,
  ],
})
export class OtpCodesModule {}
