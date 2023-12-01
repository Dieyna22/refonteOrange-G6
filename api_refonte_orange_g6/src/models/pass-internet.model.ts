import {Entity, model, property} from '@loopback/repository';

@model()
export class PassInternet extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPass?: number;

  @property({
    type: 'number',
    required: true,
  })
  nbrGiga: number;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'string',
    required: true,
  })
  durer: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<PassInternet>) {
    super(data);
  }
}

export interface PassInternetRelations {
  // describe navigational properties here
}

export type PassInternetWithRelations = PassInternet & PassInternetRelations;
