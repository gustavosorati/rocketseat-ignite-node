import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: 'React JS',
            duration: 500,
        }
    });

    console.log(result)
}

main()