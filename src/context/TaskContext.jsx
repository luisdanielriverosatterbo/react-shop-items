import { createContext, useState, useEffect } from "react";
import { stockdata as data } from "../data/stockdata.js";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [instock, setInstock] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [modeEdit, setModeEdit] = useState(false);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        category: category,
        id: String(tasks.length) + String(Date.now()),
        price: price,
        //title: task.title,
        stocked: instock,
        name: title,
        description: description,
        image: '/src/assets/images/newproduct.jpg',
      },
    ]);
    setId("");
    setCategory("");
    setTitle("");
    setPrice("");
    setInstock(false);
    setDescription("");
    setImage("");
    setModeEdit(false);
  }

  function editTask(task) {
    setId(task.id);
    setCategory(task.category);
    setTitle(task.name);
    setPrice(task.price);
    setInstock(task.stocked);
    setDescription(task.description);
    setImage(task.image);
    setModeEdit(true);
  }

  function editExistingTask(id) {
    let index = -1;
    let arr_temp = [...tasks] 
    index = arr_temp.findIndex((product) => product.id === id);
    if (index !== -1) {
      arr_temp[index] = {
        id,
        category,
        name: title,
        price,
        stocked: instock,
        description,
        image,
      };
      setTasks(arr_temp);
    }
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
    setId("");
    setCategory("");
    setTitle("");
    setPrice("");
    setInstock(false);
    setDescription("");
    setImage("");
    setModeEdit(false);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        id,
        category,
        title: title,
        price,
        instock,
        description,
        image,
        tasks,
        createTask: createTask,
        deleteTask: deleteTask,
        setId,
        setCategory,
        setTitle,
        setPrice,
        setInstock,
        setDescription,
        setImage,
        editTask,
        modeEdit,
        setModeEdit,
        editExistingTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
