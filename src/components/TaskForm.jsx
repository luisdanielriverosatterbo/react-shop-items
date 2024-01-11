import { useState, useRef, useEffect, useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [enviado, setEnviado] = useState("");
  const inputName = useRef();
  const { createTask } = useContext(TaskContext);

  /*   useEffect(() => {
    inputName.current.focus();
  }, []); */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0){
       alert('¡Debe suministrar un nombre para la tarea!');       
       return;
    }
    if (description.length === 0 ){
      alert('¡Debe suministrar una descripción para la tarea!');
      return;
    }
    createTask({ title, description });
    setTitle("");
    setDescription("");
    inputName.focus;
  };

  return (
    <div className="max-w-md mx-auto rounded-md">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 mx-auto">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe tu tarea..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          tabIndex={1}
          className="bg-slate-300 p-3 w-full mb-2"
          ref={inputName}
          maxLength={20}
        />
        <textarea
          placeholder="Escribe la descripción de la tarea..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          tabIndex={2}
          className="bg-slate-300 p-3 w-full mb-2"
          maxLength={40}
        />
        <div className="w-full">
          <button className="bg-indigo-500 text-white px-4 py-1 hover:bg-yellow-200 hover:text-black font-bold mx-auto">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
