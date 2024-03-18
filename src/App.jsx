import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900">
      <div className="container mx-auto bg-blue-400 rounded-md px-2 py-2">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App;
