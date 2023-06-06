import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RegisterUserInput } from '../dto/register.input';
import { LoginUserInput } from '../dto/login.input';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('/register')
    @ApiTags('auth')
    @ApiBody({type: RegisterUserInput})
    async register(@Body() createUserDto: RegisterUserInput) {
        const res = await this.authService.create(createUserDto);
        if (!res) {
            return 'error in register'
        }
        return 'register successfully'
    }

    @Post('/login')
    @ApiTags('auth')
    @ApiBody({type: LoginUserInput})
    async create(@Body() createUserDto: LoginUserInput) {
        const user = await this.authService.login(createUserDto);
        if (!Array.isArray(user) || !user.length) {
            return 'username or password incorrect'
        }
        return user
    }
}
