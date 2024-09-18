import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { SecurityService } from './security.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY'), // Fetching SECRET from environment variables
        signOptions: { expiresIn: '15d' },
      }),
    }),
  ],
  providers: [SecurityService],
  exports: [SecurityService],
})
export class SecurityModule {}
