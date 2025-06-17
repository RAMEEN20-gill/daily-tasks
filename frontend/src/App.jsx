import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import * as api from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [viewTask, setViewTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await api.getTasks();
      console.log("Fetched tasks:", data); 
    setTasks(data);
  }

  async function handleSave(task) {
    if (task.id) {
      await api.updateTask(task.id, task);
    } else {
      await api.createTask(task);
    }
    loadTasks();
    setEditTask(null);
  }

  async function handleDelete(id) {
    await api.deleteTask(id);
    loadTasks();
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSave={handleSave} editTask={editTask} />
      <TaskList tasks={tasks} onEdit={setEditTask} onDelete={handleDelete} />
      <TaskDetails task={viewTask} />
    </div>
  );
}

export default App;
