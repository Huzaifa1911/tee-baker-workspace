import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
