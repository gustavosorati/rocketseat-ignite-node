import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: "Aprendendo firebase do zero",
            description: "Aprendendo firebase",
            courses: {
                create: {
                    courses: {
                        connect: {
                            id: '28dcf9c4-8226-4842-84b3-c8891e6543dc'
                        }
                    }
                }
            }


        },
    });

    console.log(result)
}

main()