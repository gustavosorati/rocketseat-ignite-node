import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


async function main(){
    // SELECT * FROM COURSES LIMIT 1
    const result = await prisma.courses.update({
        where: {
            id: 'ad297b3f-578a-4baf-abf1-82039420ada2'
        },
        data: {
            duration: 300,
        }
    })

    console.log(result)
}

main();