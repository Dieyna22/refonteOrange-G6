import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Fibre, FibreRelations} from '../models';

export class FibreRepository extends DefaultCrudRepository<
  Fibre,
  typeof Fibre.prototype.idFibre,
  FibreRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Fibre, dataSource);
  }
}
