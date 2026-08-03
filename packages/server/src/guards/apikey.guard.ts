// Nest
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // bypass global api key guard for some specific endpoints
    const bypass: string = this.reflector.get('public', context.getHandler());
    if (bypass === 'yes') {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'] || request;

    if (!apiKey) {
      throw new UnauthorizedException('API key is missing.');
    }

    if (apiKey !== process.env.SECRET_API_KEY) {
      throw new UnauthorizedException('Invalid API key.');
    }

    return true;
  }
}
