function TaskDetails({ task }) {
  if (!task) return <p>Select a task to see details</p>;

  return (
    <div>
      <h3>Task Details</h3>
      <p><b>Title:</b> {task.title}</p>
      <p><b>Description:</b> {task.description}</p>
      <p><b>Status:</b> {task.status}</p>
      <p><b>Due Date:</b> {task.dueDate}</p>
    </div>
  );
}

export default TaskDetails;
