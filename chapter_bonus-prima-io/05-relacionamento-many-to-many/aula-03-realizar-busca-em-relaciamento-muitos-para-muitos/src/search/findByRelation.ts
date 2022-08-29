import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.findMany({
        include: {
            courses: true,
            modules: false
        }
    });

    console.log(JSON.stringify(result))
}

main()