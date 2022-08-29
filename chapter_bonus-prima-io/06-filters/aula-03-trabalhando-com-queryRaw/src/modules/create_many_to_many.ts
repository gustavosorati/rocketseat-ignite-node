import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
          fk_id_course: "28dcf9c4-8226-4842-84b3-c8891e6543dc",
          fk_id_module: "b115aee0-3d62-4f05-ad18-105260769d05"
        },
    });

    console.log(result)
}

main()