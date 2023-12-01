import {Entity, model, property} from '@loopback/repository';

@model()
export class Commande extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCommande?: number;

  @property({
    type: 'number',
    required: true,
  })
  numCommande: number;

  @property({
    type: 'date',
    required: true,
  })
  dateCommande: string;

  @property({
    type: 'string',
    required: true,
  })
  etatCommande: string;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  @property({
    type: 'number',
    required: true,
  })
  idProduit: number;

  @property({
    type: 'number',
    required: true,
  })
  prixTotal: number;

  @property({
    type: 'number',
  })
  nbrCommande?: number;


  constructor(data?: Partial<Commande>) {
    super(data);
  }
}

export interface CommandeRelations {
  // describe navigational properties here
}

export type CommandeWithRelations = Commande & CommandeRelations;
