import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MyuserService } from './myuser.service';
import { CreateMyuserInput } from './dto/create-myuser.input';
import { UpdateMyuserInput } from './dto/update-myuser.input';

@Resolver('Myuser')
export class MyuserResolver {
  constructor(private readonly myuserService: MyuserService) {}

  @Mutation('createMyuser')
  create(@Args('createMyuserInput') createMyuserInput: CreateMyuserInput) {
    return this.myuserService.create(createMyuserInput);
  }

  @Query('myusers')
  findAll() {
    return this.myuserService.findAll();
  }

  @Query('myuser')
  findOne(@Args('id') id: number) {
    return this.myuserService.findOne(id);
  }

  @Mutation('updateMyuser')
  update(@Args('updateMyuserInput') updateMyuserInput: UpdateMyuserInput) {
    return this.myuserService.update(updateMyuserInput.id, updateMyuserInput);
  }

  @Mutation('removeMyuser')
  remove(@Args('id') id: number) {
    return this.myuserService.remove(id);
  }
}
