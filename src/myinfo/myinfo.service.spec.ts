import { Test, TestingModule } from '@nestjs/testing';
import { MyinfoService } from './myinfo.service';

describe('MyinfoService', () => {
  let service: MyinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyinfoService],
    }).compile();

    service = module.get<MyinfoService>(MyinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
