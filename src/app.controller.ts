import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // localhost:3000
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname') //localhost:3000/showname
  getName(): string {
    return this.appService.getName();
  }

  @Get('/getjson')
  getJson() {
    return this.appService.getJson();
  }
}
