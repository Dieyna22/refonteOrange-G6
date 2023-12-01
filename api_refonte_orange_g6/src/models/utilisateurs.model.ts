import {Entity, model, property} from '@loopback/repository';

@model()
export class Utilisateurs extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idUser?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  prenom: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<Utilisateurs>) {
    super(data);
  }
}

export interface UtilisateursRelations {
  // describe navigational properties here
}

export type UtilisateursWithRelations = Utilisateurs & UtilisateursRelations;
