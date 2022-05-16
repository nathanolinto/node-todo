import { Router } from "express";

import { todosRouter } from "./todos.routes.js";

const router = Router();

router.use("/todos", todosRouter);

export { router };
