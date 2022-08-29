import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de ReactJS",
            duration: 500,
            description: 'Curso excelente de ReactJS',
            fk_id_teacher: 'fb4e2515-bd8e-4cbd-8f73-2a3dc0a410be'
        },
    });

    console.log(result)
}

main()