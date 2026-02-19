import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService,
                private readonly globalhelperService: GlobalHelperService
    ) {}

    @Get()
    productFunc(): string{
        return this.productService.productFunc();

    }

    @Get('/function2')
    productFunc2(): string{
        return this.productService.productFunc2();
    }

    @Get('/shared')
    sharedFunc(): string{
        return this.utilityService.shareFunc();
    }

    @Get('/global')
    globalFunc(): string{
        return this.globalhelperService.globalFunc();
    }

}
