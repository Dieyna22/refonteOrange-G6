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
import {GameBox} from '../models';
import {GameBoxRepository} from '../repositories';

export class GameBoxController {
  constructor(
    @repository(GameBoxRepository)
    public gameBoxRepository : GameBoxRepository,
  ) {}

  @post('/game-boxes')
  @response(200, {
    description: 'GameBox model instance',
    content: {'application/json': {schema: getModelSchemaRef(GameBox)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GameBox, {
            title: 'NewGameBox',
            exclude: ['idGameBox'],
          }),
        },
      },
    })
    gameBox: Omit<GameBox, 'idGameBox'>,
  ): Promise<GameBox> {
    return this.gameBoxRepository.create(gameBox);
  }

  @get('/game-boxes/count')
  @response(200, {
    description: 'GameBox model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GameBox) where?: Where<GameBox>,
  ): Promise<Count> {
    return this.gameBoxRepository.count(where);
  }

  @get('/game-boxes')
  @response(200, {
    description: 'Array of GameBox model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GameBox, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GameBox) filter?: Filter<GameBox>,
  ): Promise<GameBox[]> {
    return this.gameBoxRepository.find(filter);
  }

  @patch('/game-boxes')
  @response(200, {
    description: 'GameBox PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GameBox, {partial: true}),
        },
      },
    })
    gameBox: GameBox,
    @param.where(GameBox) where?: Where<GameBox>,
  ): Promise<Count> {
    return this.gameBoxRepository.updateAll(gameBox, where);
  }

  @get('/game-boxes/{id}')
  @response(200, {
    description: 'GameBox model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GameBox, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GameBox, {exclude: 'where'}) filter?: FilterExcludingWhere<GameBox>
  ): Promise<GameBox> {
    return this.gameBoxRepository.findById(id, filter);
  }

  @patch('/game-boxes/{id}')
  @response(204, {
    description: 'GameBox PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GameBox, {partial: true}),
        },
      },
    })
    gameBox: GameBox,
  ): Promise<void> {
    await this.gameBoxRepository.updateById(id, gameBox);
  }

  @put('/game-boxes/{id}')
  @response(204, {
    description: 'GameBox PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gameBox: GameBox,
  ): Promise<void> {
    await this.gameBoxRepository.replaceById(id, gameBox);
  }

  @del('/game-boxes/{id}')
  @response(204, {
    description: 'GameBox DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gameBoxRepository.deleteById(id);
  }
}
