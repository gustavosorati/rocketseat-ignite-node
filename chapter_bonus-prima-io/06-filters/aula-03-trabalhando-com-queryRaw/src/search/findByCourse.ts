import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "dbe95293-1383-4bc3-ac35-08333040cd3b"
        },
        include: {
            modules: true
        }
    });

    console.log(result)
}

main()