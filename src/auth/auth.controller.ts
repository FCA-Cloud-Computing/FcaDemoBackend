import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}
    @Get('/login')
    getHello(): string {
      return this.AuthService.getHello();
    }
}
