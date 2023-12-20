import { Test, TestingModule } from '@nestjs/testing';
import { MyuserResolver } from './myuser.resolver';
import { MyuserService } from './myuser.service';

describe('MyuserResolver', () => {
  let resolver: MyuserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyuserResolver, MyuserService],
    }).compile();

    resolver = module.get<MyuserResolver>(MyuserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
