import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de NodeJS",
            duration: 200,
            description: 'Curso excelente de NodeJS',
            teacher: {
                connectOrCreate: {
                    where: {
                        name: 'Daniele Leão Evangelista'
                    },
                    create: {
                        name: "Daniele Leão Evangelista"
                    }
                }
            }
        },
    });

    console.log(result)
}

main()