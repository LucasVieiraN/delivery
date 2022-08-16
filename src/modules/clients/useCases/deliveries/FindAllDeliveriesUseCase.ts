import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveiriesUseCase {
  async execute(id_client: string) {
    const deliveires = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveires;
  }
}
