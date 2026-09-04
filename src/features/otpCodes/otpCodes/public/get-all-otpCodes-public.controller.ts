import { Controller, Get, Query } from '@nestjs/common';
import { GetAllOtpCodesHandlerpub } from './get-all-otpCodes/get-all-OtpCodes.handler';
import { GetAllOtpCodesRequest } from './get-all-otpCodes/get-all-OtpCodes.request';


@Controller('public/otp-codes')
export class OtpCodesPublicController {
  constructor(
    private readonly getAllHandler: GetAllOtpCodesHandlerpub,
  ) {}

  @Get('list')
  async getAll(@Query() filter: GetAllOtpCodesRequest) {
    return await this.getAllHandler.execute(filter);
  }
}