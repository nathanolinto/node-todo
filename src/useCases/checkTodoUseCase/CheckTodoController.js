import { CheckTodoUseCase } from "./CheckTodoUseCase.js";

class CheckTodoController {
  handle(request, response) {
    const { id } = request.params;
    const useCase = new CheckTodoUseCase();
    const todo = useCase.execute(id);
    console.log(todo);
    return response.status(200).send(todo);
  }
}

export { CheckTodoController };
