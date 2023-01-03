import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExistEmail = this.usersRepository.findByEmail(email);
    console.log({ alreadyExistEmail });

    if (alreadyExistEmail) {
      throw new Error("E-mail already exists");
    }

    const newUser = this.usersRepository.create({ email, name });

    return newUser;
  }
}

export { CreateUserUseCase };
