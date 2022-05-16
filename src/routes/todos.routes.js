import { Router } from "express";

import { ListTodosController } from "../useCases/listTodosUseCase/ListTodosController.js";
import { CreateTodoController } from "../useCases/createTodoUseCase/CreateTodoController.js";
import { DeleteTodoController } from "../useCases/deleteTodoUseCase/DeleteTodoController.js";
import { CheckTodoController } from "../useCases/checkTodoUseCase/CheckTodoController.js";

const todosRouter = Router();

const listTodosController = new ListTodosController();
const createTodoController = new CreateTodoController();
const deleteTodoController = new DeleteTodoController();
const checkTodoController = new CheckTodoController();

todosRouter.get("/", listTodosController.handle);
todosRouter.post("/", createTodoController.handle);
todosRouter.delete("/delete", deleteTodoController.handle);
todosRouter.put("/check/:id", checkTodoController.handle);

export { todosRouter };
