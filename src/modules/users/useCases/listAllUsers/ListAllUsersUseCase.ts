import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    const userExist = user;
    if (!userExist) {
      throw new Error("User not exists");
    }
    const isAdmin = user.admin;
    if (!isAdmin) {
      throw new Error("User is not admin.");
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase, IRequest };
