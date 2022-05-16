import { v4 as uuidV4 } from "uuid";

class Todo {
  id;
  description;
  done;
  created_at;
  edited_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date().toISOString();
      this.done = false;
    }
  }
}

export { Todo };
