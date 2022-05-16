import { ListTodosUseCase } from "./ListTodosUseCase.js";

class ListTodosController {
  handle(request, response) {
    const useCase = new ListTodosUseCase();
    const todos = useCase.execute();
    return response.status(200).send(todos);
  }
}

export { ListTodosController };
