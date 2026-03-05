import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { hash, genSalt } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(AuthUser)
        private readonly authUserModel: typeof AuthUser,
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
}
