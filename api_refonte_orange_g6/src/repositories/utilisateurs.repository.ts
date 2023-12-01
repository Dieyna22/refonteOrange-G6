import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Utilisateurs, UtilisateursRelations} from '../models';

export class UtilisateursRepository extends DefaultCrudRepository<
  Utilisateurs,
  typeof Utilisateurs.prototype.idUser,
  UtilisateursRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Utilisateurs, dataSource);
  }
}
