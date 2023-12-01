import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {PassInternet, PassInternetRelations} from '../models';

export class PassInternetRepository extends DefaultCrudRepository<
  PassInternet,
  typeof PassInternet.prototype.idPass,
  PassInternetRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(PassInternet, dataSource);
  }
}
