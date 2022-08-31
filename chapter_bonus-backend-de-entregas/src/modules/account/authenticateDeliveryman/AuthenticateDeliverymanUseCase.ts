import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDelivery {
    username: string;
    password: string;
}


export class AuthenticateDeliverymanUseCase {
    async execute({username, password}: IAuthenticateDelivery) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if(!deliveryman) throw new Error('Username or password invalid!');

        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch) throw new Error('Username or password invalid!');

        const token = await sign({username}, "4c96f8324e3ba54a99e78249b95daa11", {
            subject: deliveryman.id,
            expiresIn: '1d'
        });

        return token;
    }
}