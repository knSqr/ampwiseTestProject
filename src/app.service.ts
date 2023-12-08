import { Injectable } from '@nestjs/common';

//require("dotenv").config();
//import { TESTKEY } from '../.env';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worlds!!';
  }
  sayPost(): string {
    return 'post xd';
  }
  leakENV(): string {
    console.log('env has leaked!!');
    return String(process.env.TESTKEY);
  }
  test(): string {
    return 'test54';
  }
}
