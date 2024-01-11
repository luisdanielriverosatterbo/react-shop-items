import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize mb-2">{task.title}</h1>
      <p className="text-gray-500 text-sm flex-wrap">{task.description}</p>
      <button
        className="bg-red-500 px-2 text-white py-1 rounded-md mt-4 hover:bg-yellow-200 hover:text-black font-bold"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
