import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            duration: 200,
            description: 'Curso excelente de React Native',
            teacher: {
                connect: {
                    id: 'd8e1d64e-65f5-402e-81e7-93819af37dd8'
                }
            }
        },
    });

    console.log(result)
}

main()