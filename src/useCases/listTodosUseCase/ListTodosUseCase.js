import { TodoRepository } from "../../repositories/TodoRepository.js";

class ListTodosUseCase {
  execute() {
    const repository = TodoRepository.getIntance();
    return repository.list();
  }
}

export { ListTodosUseCase };
