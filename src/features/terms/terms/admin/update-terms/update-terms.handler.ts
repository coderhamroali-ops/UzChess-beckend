import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TermsEntity } from '../../../entities/terms.entities';
import { UpdateTermsRequest } from './update-terms.request';

@Injectable()
export class UpdateTermsHandler {

  async execute(
    id: number,
    payload: UpdateTermsRequest,
  ) {

    const term = await TermsEntity.findOneBy({
      id,
    });

    if (!term) {
      throw new NotFoundException(
        'Term not found',
      );
    }

    term.content = payload.content;

    return await TermsEntity.save(term);
  }
}