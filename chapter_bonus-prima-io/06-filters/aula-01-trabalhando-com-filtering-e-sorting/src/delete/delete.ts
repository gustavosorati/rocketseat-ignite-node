import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "d87e542a-7cd2-46f2-8e57-688ba04be1c1"
        }
    });

    console.log(JSON.stringify(result))
}

main()