import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdmin = this.usersRepository.findById(user_id);
    if (!userAdmin.admin) throw new Error("O usuário não é um admin");

    const user = this.usersRepository.list();
    return user;
  }
}

export { ListAllUsersUseCase };
