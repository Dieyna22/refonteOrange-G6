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
import {Illimix} from '../models';
import {IllimixRepository} from '../repositories';

export class IllimixController {
  constructor(
    @repository(IllimixRepository)
    public illimixRepository : IllimixRepository,
  ) {}

  @post('/illimixes')
  @response(200, {
    description: 'Illimix model instance',
    content: {'application/json': {schema: getModelSchemaRef(Illimix)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Illimix, {
            title: 'NewIllimix',
            exclude: ['idIllimix'],
          }),
        },
      },
    })
    illimix: Omit<Illimix, 'idIllimix'>,
  ): Promise<Illimix> {
    return this.illimixRepository.create(illimix);
  }

  @get('/illimixes/count')
  @response(200, {
    description: 'Illimix model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Illimix) where?: Where<Illimix>,
  ): Promise<Count> {
    return this.illimixRepository.count(where);
  }

  @get('/illimixes')
  @response(200, {
    description: 'Array of Illimix model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Illimix, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Illimix) filter?: Filter<Illimix>,
  ): Promise<Illimix[]> {
    return this.illimixRepository.find(filter);
  }

  @patch('/illimixes')
  @response(200, {
    description: 'Illimix PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Illimix, {partial: true}),
        },
      },
    })
    illimix: Illimix,
    @param.where(Illimix) where?: Where<Illimix>,
  ): Promise<Count> {
    return this.illimixRepository.updateAll(illimix, where);
  }

  @get('/illimixes/{id}')
  @response(200, {
    description: 'Illimix model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Illimix, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Illimix, {exclude: 'where'}) filter?: FilterExcludingWhere<Illimix>
  ): Promise<Illimix> {
    return this.illimixRepository.findById(id, filter);
  }

  @patch('/illimixes/{id}')
  @response(204, {
    description: 'Illimix PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Illimix, {partial: true}),
        },
      },
    })
    illimix: Illimix,
  ): Promise<void> {
    await this.illimixRepository.updateById(id, illimix);
  }

  @put('/illimixes/{id}')
  @response(204, {
    description: 'Illimix PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() illimix: Illimix,
  ): Promise<void> {
    await this.illimixRepository.replaceById(id, illimix);
  }

  @del('/illimixes/{id}')
  @response(204, {
    description: 'Illimix DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.illimixRepository.deleteById(id);
  }
}
