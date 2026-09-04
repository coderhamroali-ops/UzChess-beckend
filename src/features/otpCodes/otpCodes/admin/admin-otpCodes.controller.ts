import { Body, Controller, Delete, Get,Param, ParseIntPipe, Patch, Post, Query, } from '@nestjs/common';
import { CreateOtpCodesHandler } from './create-otpCodes/create-otpCodes.handler';
import { GetAllOtpCodesHandler } from './get-all-otpCodes/get-all-OtpCodes.handler';
import { UpdateOtpCodesHandler } from './update-otpCodes/update-OtpCodes.handler';
import { DeleteOtpCodesHandler } from './delete-otpCodes/delete-otCodes.handler';
import { CreateOtpCodesRequest } from './create-otpCodes/create-otpCodes.request';
import { GetAllOtpCodesRequest } from './get-all-otpCodes/get-all-OtpCodes.request';
import { UpdateOtpCodesRequest } from './update-otpCodes/update-OtpCodes.request';



@Controller('admin/otp-codes')
export class OtpCodesAdminController {
  constructor(
    private  createHandler: CreateOtpCodesHandler,
    private  getAllHandler: GetAllOtpCodesHandler,
    private  updateHandler: UpdateOtpCodesHandler,
    private  deleteHandler: DeleteOtpCodesHandler,
  ) {}

  @Post('create')
  async create(@Body() payload: CreateOtpCodesRequest) {
    return await this.createHandler.execute(payload);
  }

  @Get('list')
  async getAll(@Query() filter: GetAllOtpCodesRequest) {
    return await this.getAllHandler.execute(filter);
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, payload: UpdateOtpCodesRequest) {
    return await this.updateHandler.execute(id, payload);
  }

  @Delete('delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.deleteHandler.execute(id);
  }
}