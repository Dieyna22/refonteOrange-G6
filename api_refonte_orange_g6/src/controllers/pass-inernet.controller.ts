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
import {PassInternet} from '../models';
import {PassInternetRepository} from '../repositories';

export class PassInernetController {
  constructor(
    @repository(PassInternetRepository)
    public passInternetRepository : PassInternetRepository,
  ) {}

  @post('/pass-internets')
  @response(200, {
    description: 'PassInternet model instance',
    content: {'application/json': {schema: getModelSchemaRef(PassInternet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PassInternet, {
            title: 'NewPassInternet',
            exclude: ['idPass'],
          }),
        },
      },
    })
    passInternet: Omit<PassInternet, 'idPass'>,
  ): Promise<PassInternet> {
    return this.passInternetRepository.create(passInternet);
  }

  @get('/pass-internets/count')
  @response(200, {
    description: 'PassInternet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PassInternet) where?: Where<PassInternet>,
  ): Promise<Count> {
    return this.passInternetRepository.count(where);
  }

  @get('/pass-internets')
  @response(200, {
    description: 'Array of PassInternet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PassInternet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PassInternet) filter?: Filter<PassInternet>,
  ): Promise<PassInternet[]> {
    return this.passInternetRepository.find(filter);
  }

  @patch('/pass-internets')
  @response(200, {
    description: 'PassInternet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PassInternet, {partial: true}),
        },
      },
    })
    passInternet: PassInternet,
    @param.where(PassInternet) where?: Where<PassInternet>,
  ): Promise<Count> {
    return this.passInternetRepository.updateAll(passInternet, where);
  }

  @get('/pass-internets/{id}')
  @response(200, {
    description: 'PassInternet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PassInternet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PassInternet, {exclude: 'where'}) filter?: FilterExcludingWhere<PassInternet>
  ): Promise<PassInternet> {
    return this.passInternetRepository.findById(id, filter);
  }

  @patch('/pass-internets/{id}')
  @response(204, {
    description: 'PassInternet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PassInternet, {partial: true}),
        },
      },
    })
    passInternet: PassInternet,
  ): Promise<void> {
    await this.passInternetRepository.updateById(id, passInternet);
  }

  @put('/pass-internets/{id}')
  @response(204, {
    description: 'PassInternet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() passInternet: PassInternet,
  ): Promise<void> {
    await this.passInternetRepository.replaceById(id, passInternet);
  }

  @del('/pass-internets/{id}')
  @response(204, {
    description: 'PassInternet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.passInternetRepository.deleteById(id);
  }
}
