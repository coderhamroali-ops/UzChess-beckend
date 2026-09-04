import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateSouvenirColorsRequest } from './update-souvenirColors.request';
import { SouvenirColorsEntity } from '../../../entities/souvenirColors.entities';

@Injectable()
export class UpdateSouvenirColorsHandler {

  async execute(
    id: number,
    payload: UpdateSouvenirColorsRequest,
  ) {

    const souvenirColor = await SouvenirColorsEntity.findOneBy({
      id: id,
    });

    if (!souvenirColor) {
      throw new NotFoundException(
        'Souvenir color not found',
      );
    }

    const colorExists = await SouvenirColorsEntity.exists({
      where: {
        id: Not(souvenirColor.id),
        souvenirId: payload.souvenirId,
        colorId: payload.colorId,
      },
    });

    if (colorExists) {
      throw new ConflictException(
        'This color already exists for this souvenir',
      );
    }

    souvenirColor.souvenirId = payload.souvenirId;
    souvenirColor.colorId = payload.colorId;

    return await SouvenirColorsEntity.save(souvenirColor);
  }
}