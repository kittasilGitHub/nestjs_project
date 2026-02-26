import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!!!';
  }

  getName(): string {
    return 'Hello MR. Kittasil Silanon!!!';
  }

  getJson(){
    return {
      name: "kittasil",
      lastname: "silanon",
      version: process.env.API_VERSION,
      password: process.env.PASSWORD,
    }
  }


}
