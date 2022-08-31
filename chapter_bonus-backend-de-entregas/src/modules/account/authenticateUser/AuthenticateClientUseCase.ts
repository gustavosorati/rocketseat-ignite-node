import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
    username: string;
    password: string;
}


export class AuthenticateClientUseCase {
    async execute({username, password}: IAuthenticateClient) {
        // Receber as informações de usuário e senha,

        // Comparar se essas informações existem no banco de dados
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if(!client) throw new Error('Username or password invalid!');

        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch) throw new Error('Username or password invalid!');

        // Criar o token

        const token = sign({username}, "4c96f8324e3ba54a99e78249b95daa30", {
            subject: client.id,
            expiresIn: "1d"
        });

        return token;
    }
}