import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Categorie extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCategorie?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomCategorie: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Categorie>) {
    super(data);
  }
}

export interface CategorieRelations {
  // describe navigational properties here
}

export type CategorieWithRelations = Categorie & CategorieRelations;
