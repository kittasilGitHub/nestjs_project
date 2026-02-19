import { Test, TestingModule } from '@nestjs/testing';
import { MyinfoController } from './myinfo.controller';

describe('MyinfoController', () => {
  let controller: MyinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyinfoController],
    }).compile();

    controller = module.get<MyinfoController>(MyinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
