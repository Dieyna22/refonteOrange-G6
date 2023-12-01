import {Entity, model, property} from '@loopback/repository';

@model()
export class GameBox extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idGameBox?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomGameBox: string;

  @property({
    type: 'string',
    required: true,
  })
  nbrGiga: string;

  @property({
    type: 'number',
    required: true,
  })
  prixGameBox: number;

  @property({
    type: 'string',
    required: true,
  })
  dureGameBox: string;

  @property({
    type: 'string',
    required: true,
  })
  imageGameBox: string;


  constructor(data?: Partial<GameBox>) {
    super(data);
  }
}

export interface GameBoxRelations {
  // describe navigational properties here
}

export type GameBoxWithRelations = GameBox & GameBoxRelations;
