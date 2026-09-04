import { Module } from '@nestjs/common';
import { CreateCountriesHandler } from './countries/admin/create-countries/create-countries.handler';
import { CountriesAdminController } from './countries/admin/countries-admin.controller';
import { GetAllCountriesHandler } from './countries/admin/get-all-countries/get-all-countries.handler';
import { UpdateCountriesHandler } from './countries/admin/update-countries/update-countries.handler';
import { DeleteCountriesHandler } from './countries/admin/delete-countries/delete-countries.handler';
import { GetAllCountriesHandlerP } from './countries/public/get-all-countries/get-all-countries.handler';
import { ContriesPublicController } from './countries/public/contries-public.controller';

@Module({
  controllers: [
    CountriesAdminController,
    ContriesPublicController,
  ],
  providers: [
    CreateCountriesHandler,
    GetAllCountriesHandler,
    UpdateCountriesHandler,
    DeleteCountriesHandler,
    GetAllCountriesHandlerP,
  ]
})
export class CountriesModule {

}