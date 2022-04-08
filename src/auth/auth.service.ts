import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

import { JWT_SECRET_KEY } from '../config/defaultConfig';
import { IJwtPayload } from './interfaces/jwt-payload.interface';
import { IUser } from '../users/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  validate(email: string, password: string) {
    const user = this.userService.getUserByEmail(email);
    if (!user) return null;
    if (user.password === password) return user;
  }

  login(user: IUser) {
    const payload: IJwtPayload = {
      id: user.id,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload, { secret: JWT_SECRET_KEY }),
    };
  }

  verify(token: string) {
    return this.jwtService.verify(token, {
      secret: JWT_SECRET_KEY,
    });
  }
}
