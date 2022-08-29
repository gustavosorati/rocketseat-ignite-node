import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data: {
            name: 'Arquitetura Limpa',
            author_id: '16428a42-401f-495e-8ade-e17c9d2d58b7'
        }
    });

    console.log(result)
}

main()