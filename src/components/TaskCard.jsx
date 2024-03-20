import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md text-center grid place-items-center place-content-center">
      <h1 id="category_product" name="category_product" className="text-sm font-bold capitalize mb-2 align-center">
        {task.category}
      </h1>
      <h2 id="name_product" name="name_product" className="text-sm font-bold capitalize mb-2 align-center">
        {task.name}
      </h2>
      <p id="price_product" name="price_product" className="text-white-500 text-xl flex-wrap font-bold">
        USD ${task.price}
      </p>
      <p id="ind_auth" name="ind_auth" className={task.stocked ? "text-green-500 text-xl flex-wrap font-bold" : "text-red-500 text-xl flex-wrap font-bold"}>
        {task.stocked ? "Autorizado" : "No autorizado"}
      </p>
      <br></br>
      {/*<p className="text-white-500 text-sm flex-wrap">{task.description}</p>*/}
      <img
        id={task.id}
        name={task.id}
        src={task.image}
        className="rounded-md align-middle"
        style={{ width: "120px", height: "120px"}}
        title={task.description}
      />
      <div>
        <button id="btn_edit" name="btn_edit"
          className="bg-red-500 px-2 text-white py-1 rounded-md mt-4 hover:bg-yellow-200 hover:text-black font-bold"
          onClick={() => editTask(task)}
        >
          Editar
        </button>
        <button id="btn_delete" name="btn_delete"
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
