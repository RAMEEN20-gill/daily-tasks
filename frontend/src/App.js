import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import * as api from './services/api';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [viewTask, setViewTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

 async function loadTasks() {
  try {
    const data = await api.getTasks();
    console.log("Fetched tasks from API:", data);  // ADD THIS LINE
    setTasks(data);
  } catch (error) {
    console.error("Failed to load tasks:", error.message);
  }
}


  async function handleSave(task) {
    try {
      if (task.id) {
        await api.updateTask(task.id, task);
      } else {
        await api.createTask(task);
      }
      loadTasks();
      setEditTask(null);
    } catch (error) {
      console.error("Error saving task:", error.message);
    }
  }

  async function handleDelete(id) {
    try {
      await api.deleteTask(id);
      loadTasks();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  }

  return (
  <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Task Manager
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <TaskForm onSave={handleSave} editTask={editTask} />
        </div>

        <div>
          <TaskList
            tasks={tasks}
            onEdit={setEditTask}
            onDelete={handleDelete}
            onView={setViewTask}
          />
        </div>
      </div>

      {viewTask && (
        <div className="mt-6">
          <TaskDetails task={viewTask} />
        </div>
      )}
    </div>
  </div>
);
}
export default App;
