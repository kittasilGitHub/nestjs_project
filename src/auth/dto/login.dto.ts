import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto{
    @IsNotEmpty({ message: 'email require!!!'})
    @IsEmail({}, { message: 'The email format is incorrect.'})
    email: string;

    @IsNotEmpty({ message: 'password reuired!!!'})
    password: string;
}