import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {GameBox, GameBoxRelations} from '../models';

export class GameBoxRepository extends DefaultCrudRepository<
  GameBox,
  typeof GameBox.prototype.idGameBox,
  GameBoxRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(GameBox, dataSource);
  }
}
