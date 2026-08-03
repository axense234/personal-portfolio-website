// Nest
import { BadRequestException, Injectable, SetMetadata } from '@nestjs/common';
// HTTP Status Codes
import { StatusCodes } from 'http-status-codes';

@Injectable()
export class HealthService {
  constructor() {}

  async getHealth() {
    try {
      return {
        status: StatusCodes.OK,
        message: `Server is very healthy yay.`,
      };
    } catch (error: any) {
      throw new BadRequestException('Server is not healthy.');
    }
  }
}
