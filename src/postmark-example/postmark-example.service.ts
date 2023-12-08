import { Injectable } from '@nestjs/common';
import { PostmarkService } from '../postmark/postmark.service';

@Injectable()
export class PostmarkExampleService {

    constructor(private readonly postmarkService: PostmarkService) { }

    async sendExampleEmail(): Promise<string> {
        return this.postmarkService.greetCustomerEmail();
    }

}
