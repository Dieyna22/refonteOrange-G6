import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Illimix, IllimixRelations} from '../models';

export class IllimixRepository extends DefaultCrudRepository<
  Illimix,
  typeof Illimix.prototype.idIllimix,
  IllimixRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Illimix, dataSource);
  }
}
