import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(){
    // SELECT * FROM COURSES LIMIT 1
    const course = prisma.courses.findFirst();

    // SELECT * FROM COURSES ORBER BY ID DESC LIMIT 1
    const lastCourse = prisma.courses.findFirst({
        take: -1
    });

    console.log(course)
}

main();