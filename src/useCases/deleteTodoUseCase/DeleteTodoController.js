import { DeleteTodoUseCase } from "./DeleteTodoUseCase.js";

class DeleteTodoController {
  handle(request, response) {
    const { id } = request.body;
    const useCase = new DeleteTodoUseCase();
    const todo = useCase.execute(id);
    return response.status(200).send(todo);
  }
}

export { DeleteTodoController };
