import { Module } from '@nestjs/common';
import { MyinfoController } from './myinfo.controller';
import { MyinfoService } from './myinfo.service';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  imports: [UtilityModule],
  controllers: [MyinfoController],
  providers: [MyinfoService]
})
export class MyinfoModule {}
