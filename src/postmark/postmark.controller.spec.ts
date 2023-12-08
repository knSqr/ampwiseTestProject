import { Test, TestingModule } from '@nestjs/testing';
import { PostmarkController } from './postmark.controller';

describe('PostmarkController', () => {
  let controller: PostmarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostmarkController],
    }).compile();

    controller = module.get<PostmarkController>(PostmarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
