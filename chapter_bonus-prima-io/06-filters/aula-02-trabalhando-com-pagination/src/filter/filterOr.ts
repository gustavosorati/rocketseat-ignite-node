import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        startsWith: "Curso",
                        mode: "insensitive"
                    }
                }, 
                {
                    name: {
                        contains: "React",
                    }
                }
            ],
            AND: {
                duration: 200
            }
            
        }
    });

    console.log(JSON.stringify(result))
}

main()