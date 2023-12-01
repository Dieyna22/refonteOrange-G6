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
import {Fibre} from '../models';
import {FibreRepository} from '../repositories';

export class FibreController {
  constructor(
    @repository(FibreRepository)
    public fibreRepository : FibreRepository,
  ) {}

  @post('/fibres')
  @response(200, {
    description: 'Fibre model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fibre)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fibre, {
            title: 'NewFibre',
            exclude: ['idFibre'],
          }),
        },
      },
    })
    fibre: Omit<Fibre, 'idFibre'>,
  ): Promise<Fibre> {
    return this.fibreRepository.create(fibre);
  }

  @get('/fibres/count')
  @response(200, {
    description: 'Fibre model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fibre) where?: Where<Fibre>,
  ): Promise<Count> {
    return this.fibreRepository.count(where);
  }

  @get('/fibres')
  @response(200, {
    description: 'Array of Fibre model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fibre, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fibre) filter?: Filter<Fibre>,
  ): Promise<Fibre[]> {
    return this.fibreRepository.find(filter);
  }

  @patch('/fibres')
  @response(200, {
    description: 'Fibre PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fibre, {partial: true}),
        },
      },
    })
    fibre: Fibre,
    @param.where(Fibre) where?: Where<Fibre>,
  ): Promise<Count> {
    return this.fibreRepository.updateAll(fibre, where);
  }

  @get('/fibres/{id}')
  @response(200, {
    description: 'Fibre model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fibre, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Fibre, {exclude: 'where'}) filter?: FilterExcludingWhere<Fibre>
  ): Promise<Fibre> {
    return this.fibreRepository.findById(id, filter);
  }

  @patch('/fibres/{id}')
  @response(204, {
    description: 'Fibre PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fibre, {partial: true}),
        },
      },
    })
    fibre: Fibre,
  ): Promise<void> {
    await this.fibreRepository.updateById(id, fibre);
  }

  @put('/fibres/{id}')
  @response(204, {
    description: 'Fibre PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fibre: Fibre,
  ): Promise<void> {
    await this.fibreRepository.replaceById(id, fibre);
  }

  @del('/fibres/{id}')
  @response(204, {
    description: 'Fibre DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fibreRepository.deleteById(id);
  }
}
