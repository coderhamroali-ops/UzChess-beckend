import { Module } from '@nestjs/common';
import { AuthorsAdminControler } from './authors/admin/authors.admin.controler';
import { CreateAuthorsHandler } from './authors/admin/create-authors/create-authors.handler';
import { GetAllAuthorsHandlerP } from './authors/public/get-all-authors/get-all-authors.handler';
import { UpdateAuthorsHandler } from './authors/admin/update-authors/update-authors.handler';
import { DeleteAuthorsHandler } from './authors/admin/delete-authors/delete-authors.handler';
import { GetAllAuthorsHandler } from './authors/admin/get-all-authors/get-all-authors.handler';
import { AuthorsPublicController } from './authors/public/authors-public.controller';

@Module({
  controllers: [
    AuthorsAdminControler,
    AuthorsPublicController,
  ],
  providers: [
    CreateAuthorsHandler,
    GetAllAuthorsHandler,
    UpdateAuthorsHandler,
    DeleteAuthorsHandler,
    GetAllAuthorsHandlerP
  ]
})
export class AuthorsModule {}