import { Injectable } from '@nestjs/common';
import { TermsEntity } from '../../../entities/terms.entities';
import { CreateTermsRequest } from './create-terms.request';

@Injectable()
export class CreateTermsHandler {

  async execute(payload: CreateTermsRequest) {

    const newTerm = TermsEntity.create({
      content: payload.content,
    });

    return await TermsEntity.save(newTerm);
  }
}