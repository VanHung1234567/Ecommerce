import { PrismaService } from 'src/shared/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { RoleName } from 'src/shared/constants/role.constant';

@Injectable()
export class RolesService {
  private clientRoleId: number | null = null;

  constructor(private readonly prismaService: PrismaService) {}

  async getClientRoleId() {
    if (this.clientRoleId) {
      return this.clientRoleId;
    }

    // const role = await this.prismaService.role.findUniqueOrThrow({
    //   where: {
    //     name: RoleName.Client,
    //   },
    // });

    const role = await this.prismaService.role.findFirst({
      where: {
        name: RoleName.Client,
      },
    });

    if (!role) {
      throw new Error('Client role not found');
    }

    this.clientRoleId = role.id;
    return role.id;
  }
}
