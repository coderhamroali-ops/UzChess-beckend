import { Module } from '@nestjs/common';
import { OtpCodesAdminController } from './otpCodes/admin/admin-otpCodes.controller';
import { CreateOtpCodesHandler } from './otpCodes/admin/create-otpCodes/create-otpCodes.handler';
import { GetAllOtpCodesHandler } from './otpCodes/admin/get-all-otpCodes/get-all-OtpCodes.handler';
import { UpdateOtpCodesHandler } from './otpCodes/admin/update-otpCodes/update-OtpCodes.handler';
import { DeleteOtpCodesHandler } from './otpCodes/admin/delete-otpCodes/delete-otCodes.handler';
import { OtpCodesPublicController } from './otpCodes/public/get-all-otpCodes-public.controller';
import { GetAllOtpCodesHandlerpub } from './otpCodes/public/get-all-otpCodes/get-all-OtpCodes.handler';

@Module({
  controllers: [
    OtpCodesAdminController,
    OtpCodesPublicController
  ],

  providers: [
    CreateOtpCodesHandler,
    GetAllOtpCodesHandler,
    UpdateOtpCodesHandler,
    DeleteOtpCodesHandler,
    GetAllOtpCodesHandlerpub,
  ],
})
export class OtpCodesModule {}