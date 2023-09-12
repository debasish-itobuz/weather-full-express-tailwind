import express from "express";
import { logic } from "./modules/logic.js";

export const app = express();

app.get("/", (request, response, next) => {
  return response.status(200).json("Welcome to weather API");
});

app.get("*", logic);
