import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de NodeJS",
            duration: 200,
            description: 'Curso excelente de NodeJS'
        },
    });

    console.log(result)
}

main()