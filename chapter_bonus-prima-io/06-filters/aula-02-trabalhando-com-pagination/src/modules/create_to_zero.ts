import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            courses: {
                create: {
                    name: "Curso de NodeJS",
                    duration: 200
                }
            },
            modules: {
                create: {
                    name: "Curso completo de prisma IO",
                    description: "Curso de Prisma IO"
                }
            }


        },
    });

    console.log(result)
}

main()