import { Controller, Get } from '@nestjs/common';
import { MyinfoService } from './myinfo.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('myinfo')
export class MyinfoController {
    constructor(private readonly myinfoService: MyinfoService,
                private readonly utilityService: UtilityService
    ) {}

    @Get()
    getjson(){
        return this.myinfoService.getjson();
    }

    @Get('/shared')
    sharedFunc(): string{
        return this.utilityService.shareFunc();
    }
}
