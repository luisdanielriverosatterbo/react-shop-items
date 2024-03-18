import { useState, useRef, useEffect, useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const {
    id,
    category,
    title,
    price,
    instock,
    description,
    image,
    setId,
    setCategory,
    setTitle,
    setPrice,
    setInstock,
    setDescription,
    setImage,
    createTask,
    modeEdit,
    setModeEdit,
    editExistingTask,
  } = useContext(TaskContext);

  const resetFields = () => {
    setId("");
    setCategory("");
    setTitle("");
    setPrice("");
    setInstock(false);
    setDescription("");
    setImage("");
    setModeEdit(false);
  };

  const handleCancelar = (e) => {
    e.preventDefault();
    resetFields();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    if (category.length === 0) {
      alert("¡Debe suministrar un nombre para la categoría!");
      return;
    }
    if (title.length === 0) {
      alert("¡Debe suministrar un nombre para e producto!");
      return;
    }
    if (price.length === 0) {
      alert("¡Debe suministrar un valor para el precio!");
      return;
    }
    if (description.length === 0) {
      alert("¡Debe suministrar una descripción para el producto!");
      return;
    }
    if (!modeEdit) {
      createTask({ category, title, price, instock, description });
    } else {
      //console.log(id)
      editExistingTask(id);
      resetFields();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4 rounded-md">
        <div>
          <h1 className="text-2xl font-bold text-white mb-3 mx-auto text-center">
            Agrega o edita un producto
          </h1>
          <input
            type="hidden"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <input
            placeholder="Categoría..."
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            autoFocus
            tabIndex={1}
            className="bg-slate-300 p-3 w-full mb-2"
            maxLength={40}
          />
          <input
            placeholder="Nombre del producto..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            tabIndex={2}
            className="bg-slate-300 p-3 w-full mb-2"
            maxLength={40}
          />
          <input
            placeholder="Precio del producto..."
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"            
            autoFocus
            tabIndex={3}
            className="bg-slate-300 p-3 w-full mb-2"
            maxLength={8}
            pattern="/^\d*(\.\d{1})?\d{0,1}$/"            
          />
          <div>
            {/* <div className="align-text-bottom">En stock</div> */}
            <div className="container-toggle p-3 mb-2 mt-2">
              <input
                type="checkbox"
                id="check"
                onChange={(e) => setInstock(e.target.checked)}
                checked={instock}
              />
              <label htmlFor="check" className="button-toggle"></label>
            </div>
          </div>
          <textarea
            placeholder="Descripción del producto..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            tabIndex={4}
            className="bg-slate-300 p-3 w-full mb-2 mt-2"
            maxLength={40}
          />
          <input type="hidden" id="image" value={image} />
        </div>
        <div className="text-center">
          <button
            className="bg-indigo-500 text-white px-2 py-1 hover:bg-yellow-200 hover:text-black font-bold mx-auto"
            onClick={handleGuardar}
          >
            Guardar
          </button>
          <button
            className="bg-indigo-500 text-white px-2 py-1 ml-2 hover:bg-yellow-200 hover:text-black font-bold mx-auto"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
