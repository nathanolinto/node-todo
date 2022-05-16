import { TodoRepository } from "../../repositories/TodoRepository.js";

class CheckTodoUseCase {
  execute(id) {
    const repository = TodoRepository.getIntance();
    const todo = repository.findById(id);
    if (!todo) {
      throw new Error("Todo not exists!");
    }
    return repository.check(id);
  }
}

export { CheckTodoUseCase };
