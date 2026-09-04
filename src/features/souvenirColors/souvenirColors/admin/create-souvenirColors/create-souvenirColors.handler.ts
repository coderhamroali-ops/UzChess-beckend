import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateSouvenirColorsRequest } from './create-souvenirColors.request';
import { SouvenirColorsEntity } from '../../../entities/souvenirColors.entities';

@Injectable()
export class CreateSouvenirColorsHandler {

  async execute(payload: CreateSouvenirColorsRequest) {

    const colorExists = await SouvenirColorsEntity.exists({
      where: {
        souvenirId: payload.souvenirId,
        colorId: payload.colorId,
      },
    });

    if (colorExists) {
      throw new ConflictException(
        'This color already exists for this souvenir',
      );
    }

    const newColor = SouvenirColorsEntity.create({
      souvenirId: payload.souvenirId,
      colorId: payload.colorId,
    });

    return await SouvenirColorsEntity.save(newColor);
  }
}