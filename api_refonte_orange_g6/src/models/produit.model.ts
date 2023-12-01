import {Entity, model, property} from '@loopback/repository';

@model()
export class Produit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idProduit?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomProduit: string;

  @property({
    type: 'number',
    required: true,
  })
  quantite: number;

  @property({
    type: 'number',
    required: true,
  })
  idCategorie: number;

  @property({
    type: 'string',
    required: true,
  })
  couleur: string;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'string',
  })
  description?: string;


  @property({
    type: 'string',
    required: true,
  })
  image: string;

  constructor(data?: Partial<Produit>) {
    super(data);
  }
}

export interface ProduitRelations {
  // describe navigational properties here
}

export type ProduitWithRelations = Produit & ProduitRelations;
