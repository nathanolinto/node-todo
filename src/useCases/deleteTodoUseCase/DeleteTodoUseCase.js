import { TodoRepository } from "../../repositories/TodoRepository.js";

class DeleteTodoUseCase {
  execute(id) {
    const repository = TodoRepository.getIntance();
    const todo = repository.findById(id);
    if (!todo) {
      throw new Error("Todo not exists!");
    }
    return repository.delete(id);
  }
}

export { DeleteTodoUseCase };
