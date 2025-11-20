import { Injectable } from '@nestjs/common';
import { CreateUserReqDTO } from 'src/dto/createUser.req.dto';
import { UpdateUserReqDTO } from 'src/dto/updateUser.req.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(dto: CreateUserReqDTO) {
    await this.prismaService.user.create({
      data: {
        email: dto.email,
        name: dto.name,
      },
    });

    return;
  }

  async getUser() {
    const user = await this.prismaService.user.findMany();
    return user;
  }

  async getUserDetail(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: Number(userId),
      },
      select: {
        email: true,
      },
    });

    return user;
  }

  async updateUser(dto: UpdateUserReqDTO) {
    const user = await this.prismaService.user.update({
      where: {
        id: Number(dto.id),
      },
      data: {
        name: dto.name,
      },
    });

    return user;
  }
}
