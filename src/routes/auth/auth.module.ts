import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HashingService } from 'src/shared/services/hashing.service';
import { RolesService } from './roles.service';
import { PrismaService } from 'src/shared/services/prisma.service';
import { TokenService } from 'src/shared/services/token.service';

@Module({
  providers: [AuthService, HashingService, RolesService, PrismaService],
  controllers: [AuthController]
})
export class AuthModule {}
