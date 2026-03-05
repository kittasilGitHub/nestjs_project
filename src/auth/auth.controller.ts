import { Body, Controller, HttpCode, Post, Request, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

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

    @Post('/login')
    @HttpCode(200)
    async login(@Body() loginDto: LoginDto){
        return await this.authService.login(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    async getUserProfile(@Request() req: any){
        return await this.authService.getUserProfile(Number(req.user.user_id));
    }
}
