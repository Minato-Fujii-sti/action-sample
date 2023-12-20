import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from 'src/graphql';

// ほんとはserviceは別のファイルに作った方が良い
const mockTodoService = {
  getTodos() {
    return Promise.resolve([
      {
        id: '1',
        title: '読書',
        description: '一時間本を読む',
      },
      {
        id: '2',
        title: 'マラソン',
        description: '一時間マラソンする',
      },
    ]);
  },
};

@Resolver('Todo')
export class TodoResolver {
  @Query('todos')
  todoSearch(): Promise<Todo[]> {
    return mockTodoService.getTodos();
  }
}
