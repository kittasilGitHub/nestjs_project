import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    productFunc(): string {
        return "Hello from productFunc()";
    }

    productFunc2() : string {
        return "Hello from productFunc2()";
    }
}
