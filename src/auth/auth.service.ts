import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { hash, genSalt, compare } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(AuthUser)
        private readonly authUserModel: typeof AuthUser,
        private jwtService : JwtService
    ){}

    async register(registerDto: RegisterDto){
        const authuser = await this.authUserModel.findOne({
            where: { email: registerDto.email },
        });
        if (authuser) {
            throw new BadRequestException(
                'This email already exists, Please try again!!!',
            );
        }

        // encrypt password
        const salt = await genSalt(10);
        const hashpassword = await hash(registerDto.password, salt);

        // create new user
        const newUser = await this.authUserModel.create({
            username : registerDto.username,
            email : registerDto.email,
            password : hashpassword,
        });

        return newUser;
    }

    async login(loginDto : LoginDto){
        const authuser = await this.authUserModel.findOne({
            where: { email: loginDto.email },
        });
        if (!authuser) {
            throw new BadRequestException('This email already exists, Please try again!!!');
        }

        const isValid = await compare(loginDto.password, authuser.getDataValue('password'));
        if( !isValid ){
            throw new UnauthorizedException('Error Password!!!');
        }

        // JWT create
        const payload = {user_id: authuser.id};
        const token = await this.jwtService.signAsync(
            payload,
            {
                secret: process.env.JWT_SECRET_KEY
            }
        );
        return {
            token : token
        }
    }

    async getUserProfile(id : number){
        return await this.authUserModel.findByPk(
            id,{
                attributes: ['id', 'username', 'email'],
            });
    }
}
