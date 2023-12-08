import { Test, TestingModule } from '@nestjs/testing';
import { PostmarkExampleController } from './postmark-example.controller';

describe('PostmarkExampleController', () => {
  let controller: PostmarkExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostmarkExampleController],
    }).compile();

    controller = module.get<PostmarkExampleController>(PostmarkExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
