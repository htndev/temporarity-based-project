import axios from "axios";
import { config } from "./api-config";

export class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: config.baseURL,
      headers: {
        "X-TEMPORARITY-API-KEY": config.apiToken,
        Authorization: `Bearer ${config.jwtToken}`,
      },
    });
  }

  getTodos() {
    return this.instance.get("/todos");
  }

  addTodo(todo) {
    return this.instance.put("/todos", todo);
  }

  updateTodo(todo) {
    return this.instance.patch(`/todos/${todo.id}`, todo);
  }

  deleteTodo(todo) {
    return this.instance.delete(`/todos/${todo.id}`);
  }
}

export const api = new Api();
