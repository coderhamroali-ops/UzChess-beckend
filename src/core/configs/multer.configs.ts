import { diskStorage } from 'multer';
import * as fs from 'fs';
import { BadRequestException } from '@nestjs/common';

function getFileType(mime: string): string {
  switch (mime) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/gif':
      return 'image';
    case 'application/pdf':
      return 'document';
    default:
      return 'file';
  }
}

const storageOptions = diskStorage({
  destination: (req, file, cb) => {
    const subFolder: string = getFileType(file.mimetype);
    const destination: string = `./uploads/${subFolder}`;
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split('.').pop();
    if (!extension) {
      return cb(new BadRequestException('File does not have extension'), '');
    }
    const prefix = getFileType(file.mimetype);
    const fileName = `${prefix}_${Date.now()}.${extension}`;
    return cb(null, fileName);
  },
});
export default storageOptions;
