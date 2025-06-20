import { useState, useEffect } from 'react';

function TaskForm(props) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
    dueDate: ''
  });

  useEffect(() => {
    if (props.editTask) {
      setTask(props.editTask);
    }
  }, [props.editTask]);

  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSave(task);
    setTask({ title: '', description: '', status: 'Pending', dueDate: '' });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {props.editTask ? 'Edit Task' : 'Add New Task'}
      </h2>

      <div className="mb-4">
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <input
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          name="dueDate"
          type="date"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
      >
        Save Task
      </button>
    </form>
  );
}

export default TaskForm;
