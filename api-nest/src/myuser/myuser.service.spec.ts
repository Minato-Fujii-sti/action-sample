import { Test, TestingModule } from '@nestjs/testing';
import { MyuserService } from './myuser.service';

describe('MyuserService', () => {
  let service: MyuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyuserService],
    }).compile();

    service = module.get<MyuserService>(MyuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
