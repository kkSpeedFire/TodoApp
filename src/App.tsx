import { List } from "./pages/List";
import { Route, Routes } from "react-router-dom";
import { Task } from "./pages/Task";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center ">
      <TodoProvider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/task/:id" element={<Task />} />
        </Routes>
      </TodoProvider>
    </div>
  );
}

export default App;
