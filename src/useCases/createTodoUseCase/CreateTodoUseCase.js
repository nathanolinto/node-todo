import { TodoRepository } from "../../repositories/TodoRepository.js";

class CreateTodoUseCase {
  execute(description) {
    if (description === "") {
      throw new Error("Description not null");
    }
    const repository = TodoRepository.getIntance();
    return repository.create(description);
  }
}

export { CreateTodoUseCase };
