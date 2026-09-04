import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSouvenirImagesRequest } from './create-souvenirImages.request';
import { SouvenirImagesEntity } from '../../../entities/souvenirImages.entities';

@Injectable()
export class CreateSouvenirImagesHandler {

  async execute(payload: CreateSouvenirImagesRequest) {

    const imageExists = await SouvenirImagesEntity.exists({
      where: {
        souvenirId: payload.souvenirId,
        image: payload.image,
      },
    });

    if (imageExists) {
      throw new ConflictException('Image already exists');
    }

    const newImage = SouvenirImagesEntity.create({
      souvenirId: payload.souvenirId,
      image: payload.image,
    });

    return await SouvenirImagesEntity.save(newImage);
  }
}