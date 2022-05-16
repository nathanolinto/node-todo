import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express from "express";

import { router } from "./routes/index.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

app.use((err, request, response, next) => {
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
  next();
});

export { app };
