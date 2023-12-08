import { Test, TestingModule } from '@nestjs/testing';
import { PostmarkExampleService } from './postmark-example.service';

describe('PostmarkExampleService', () => {
  let service: PostmarkExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostmarkExampleService],
    }).compile();

    service = module.get<PostmarkExampleService>(PostmarkExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
