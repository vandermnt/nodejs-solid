import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const idAlreadyExist = this.usersRepository.findById(user_id);

    if (!idAlreadyExist) {
      throw new Error("User not found!");
    }

    this.usersRepository.turnAdmin(idAlreadyExist);
    return idAlreadyExist;
  }
}

export { TurnUserAdminUseCase };
