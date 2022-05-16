import { CreateTodoUseCase } from "./CreateTodoUseCase.js";

class CreateTodoController {
  handle(request, response) {
    const { description } = request.body;
    const useCase = new CreateTodoUseCase();
    const todo = useCase.execute(description);
    return response.status(201).send(todo);
  }
}

export { CreateTodoController };
