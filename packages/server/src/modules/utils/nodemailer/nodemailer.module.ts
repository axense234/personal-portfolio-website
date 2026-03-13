// Nest
import { Global, Module } from '@nestjs/common';
// Services
import { NodeMailerService } from './nodemailer.sevice';

@Global()
@Module({
  exports: [NodeMailerService],
  providers: [NodeMailerService],
})
export class NodeMailerModule {}
