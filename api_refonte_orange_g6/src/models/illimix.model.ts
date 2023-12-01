import {Entity, model, property} from '@loopback/repository';

@model()
export class Illimix extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idIllimix?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomIllimix: string;

  @property({
    type: 'number',
    required: true,
  })
  minAppel: number;

  @property({
    type: 'number',
    required: true,
  })
  nbrMessage: number;

  @property({
    type: 'number',
    required: true,
  })
  nbreGiga: number;

  @property({
    type: 'number',
    required: true,
  })
  durer: number;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;


  constructor(data?: Partial<Illimix>) {
    super(data);
  }
}

export interface IllimixRelations {
  // describe navigational properties here
}

export type IllimixWithRelations = Illimix & IllimixRelations;
