import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md text-center grid place-items-center place-content-center">
      <h1 className="text-sm font-bold capitalize mb-2 align-center">
        {task.category}
      </h1>
      <h2 className="text-sm font-bold capitalize mb-2 align-center">
        {task.name}
      </h2>
      <p className="text-white-500 text-xl flex-wrap font-bold">
        USD ${task.price}
      </p>
      <p className={task.stocked ? "text-green-500 text-xl flex-wrap font-bold" : "text-red-500 text-xl flex-wrap font-bold"}>
        {task.stocked ? "Autorizado" : "No autorizado"}
      </p>
      <br></br>
      {/*<p className="text-white-500 text-sm flex-wrap">{task.description}</p>*/}
      <img
        src={task.image}
        className="rounded-md align-middle"
        style={{ width: "120px", height: "120px"}}
        title={task.description}
      />
      <div>
        <button
          className="bg-red-500 px-2 text-white py-1 rounded-md mt-4 hover:bg-yellow-200 hover:text-black font-bold"
          onClick={() => editTask(task)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 px-2 text-white py-1 rounded-md mt-4 ml-2 hover:bg-yellow-200 hover:text-black font-bold"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
