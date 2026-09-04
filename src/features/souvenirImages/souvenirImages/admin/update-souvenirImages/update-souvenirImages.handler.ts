import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Not } from 'typeorm';
import { UpdateSouvenirImagesRequest } from './update-souvenirImages.request';
import { SouvenirImagesEntity } from '../../../entities/souvenirImages.entities';

@Injectable()
export class UpdateSouvenirImagesHandler {

  async execute(
    id: number,
    payload: UpdateSouvenirImagesRequest,
  ) {

    const souvenirImage = await SouvenirImagesEntity.findOneBy({
      id: id,
    });

    if (!souvenirImage) {
      throw new NotFoundException(
        'Souvenir image not found',
      );
    }

    const imageExists = await SouvenirImagesEntity.exists({
      where: {
        id: Not(souvenirImage.id),
        souvenirId: payload.souvenirId,
        image: payload.image,
      },
    });

    if (imageExists) {
      throw new ConflictException(
        'Image already exists',
      );
    }

    souvenirImage.souvenirId = payload.souvenirId;
    souvenirImage.image = payload.image;

    return await SouvenirImagesEntity.save(souvenirImage);
  }
}