import { NotFoundException } from '@nestjs/common';
import { TermsEntity } from '../../../entities/terms.entities';

export class DeleteTermsHandler {

  async execute(id: number) {

    const term = await TermsEntity.findOneBy({
      id,
    });

    if (!term) {
      throw new NotFoundException(
        'Term not found',
      );
    }

    return await TermsEntity.remove(term);
  }
}