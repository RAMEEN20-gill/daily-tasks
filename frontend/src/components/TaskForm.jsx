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
    <form onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Description" />
      <select name="status" value={task.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <input name="dueDate" type="date" value={task.dueDate} onChange={handleChange} />
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
