import { useState } from "react";

type todoType = {
  id: number;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: todoType;
  onDelete: (id: number) => void;
  onUpdata:(id:number , newTask:string) => void
};

const Todo = ({ todo, onDelete , onUpdata }: TodoProps) => {
  const { id, task, isCompleted } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdata(id , updatedTask)
    setIsEditing(false)
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <button onClick={handleUpdate}>💾 Save</button>
        </>
      ) : (
        <>
          <h1>{task}</h1>
          <p>{isCompleted ? "✅ Completed" : "❌ Not Done"}</p>
          <button onClick={() => onDelete(id)}>🗑 Delete</button>
          <button>✔️ Complete</button>
          <button onClick={() => setIsEditing(true)}>✏️ Update</button>
        </>
      )}
    </div>
  );
};

export default Todo;
