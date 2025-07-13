import { useState } from "react";
import { todoData } from "../data";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(todoData);

  const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    setTodos([...todos, { id: Date.now()  , task: "task 3", isCompleted: false }]);
  };

    const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onUpdata = (id:number , newTask:string) => {  
    setTodos(todos.map((todo) => 
        todo.id === id ? {...todo, task:newTask} : todo
    ))
  }

  return (
    <div>
      {todos.length > 0
        ? todos.map((task) => <Todo key={task.id} todo={task}  onDelete={handleDelete} onUpdata={onUpdata} />)
        : "not FOUND"}

      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="addTodo" placeholder="create new todo" />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default TodoList;
