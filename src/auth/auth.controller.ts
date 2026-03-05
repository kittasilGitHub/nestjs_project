import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('/regist')
    @HttpCode(201)
    async register(@Body() registeDto : RegisterDto){
        await this.authService.register(registeDto);
        return {
            message: "Register complete!!!",
        }
    };
}
