import {Entity, model, property} from '@loopback/repository';

@model()
export class Fibre extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idFibre?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomFibre: string;

  @property({
    type: 'string',
    required: true,
  })
  nbrGiga: string;

  @property({
    type: 'number',
    required: true,
  })
  prixFibre: number;

  @property({
    type: 'string',
  })
  forfait?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  constructor(data?: Partial<Fibre>) {
    super(data);
  }
}

export interface FibreRelations {
  // describe navigational properties here
}

export type FibreWithRelations = Fibre & FibreRelations;
