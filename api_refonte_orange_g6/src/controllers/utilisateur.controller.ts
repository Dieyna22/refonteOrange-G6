import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Utilisateurs} from '../models';
import {UtilisateursRepository} from '../repositories';

export class UtilisateurController {
  constructor(
    @repository(UtilisateursRepository)
    public utilisateursRepository : UtilisateursRepository,
  ) {}

  @post('/utilisateurs')
  @response(200, {
    description: 'Utilisateurs model instance',
    content: {'application/json': {schema: getModelSchemaRef(Utilisateurs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilisateurs, {
            title: 'NewUtilisateurs',
            exclude: ['idUser'],
          }),
        },
      },
    })
    utilisateurs: Omit<Utilisateurs, 'idUser'>,
  ): Promise<Utilisateurs> {
    return this.utilisateursRepository.create(utilisateurs);
  }

  @get('/utilisateurs/count')
  @response(200, {
    description: 'Utilisateurs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Utilisateurs) where?: Where<Utilisateurs>,
  ): Promise<Count> {
    return this.utilisateursRepository.count(where);
  }

  @get('/utilisateurs')
  @response(200, {
    description: 'Array of Utilisateurs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Utilisateurs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Utilisateurs) filter?: Filter<Utilisateurs>,
  ): Promise<Utilisateurs[]> {
    return this.utilisateursRepository.find(filter);
  }

  @patch('/utilisateurs')
  @response(200, {
    description: 'Utilisateurs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilisateurs, {partial: true}),
        },
      },
    })
    utilisateurs: Utilisateurs,
    @param.where(Utilisateurs) where?: Where<Utilisateurs>,
  ): Promise<Count> {
    return this.utilisateursRepository.updateAll(utilisateurs, where);
  }

  @get('/utilisateurs/{id}')
  @response(200, {
    description: 'Utilisateurs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Utilisateurs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Utilisateurs, {exclude: 'where'}) filter?: FilterExcludingWhere<Utilisateurs>
  ): Promise<Utilisateurs> {
    return this.utilisateursRepository.findById(id, filter);
  }

  @patch('/utilisateurs/{id}')
  @response(204, {
    description: 'Utilisateurs PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilisateurs, {partial: true}),
        },
      },
    })
    utilisateurs: Utilisateurs,
  ): Promise<void> {
    await this.utilisateursRepository.updateById(id, utilisateurs);
  }

  @put('/utilisateurs/{id}')
  @response(204, {
    description: 'Utilisateurs PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilisateurs: Utilisateurs,
  ): Promise<void> {
    await this.utilisateursRepository.replaceById(id, utilisateurs);
  }

  @del('/utilisateurs/{id}')
  @response(204, {
    description: 'Utilisateurs DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilisateursRepository.deleteById(id);
  }
}
