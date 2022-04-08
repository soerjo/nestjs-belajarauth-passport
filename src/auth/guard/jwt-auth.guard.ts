import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();
    return request;
  }
}
