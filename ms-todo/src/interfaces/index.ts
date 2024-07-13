export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type Empty = Record<string, never>;

export type TodoList = {
  todos: Todo[];
};
