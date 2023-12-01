import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Commande, CommandeRelations} from '../models';

export class CommandeRepository extends DefaultCrudRepository<
  Commande,
  typeof Commande.prototype.idCommande,
  CommandeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Commande, dataSource);
  }
}
