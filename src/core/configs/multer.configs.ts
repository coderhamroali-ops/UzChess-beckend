import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { join } from 'path';
import { existsSync } from 'node:fs';
import { mkdirSync } from 'fs';

export const multerConfigs: MulterOptions = {
  storage: diskStorage({
    destination: (req, file, callback) => {
      const destination = join(__dirname, '../../..', 'update');
      if (!existsSync(destination)) {
        mkdirSync(destination, { recursive: true });
      }
      callback(null, 'update');
    },

    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
};
