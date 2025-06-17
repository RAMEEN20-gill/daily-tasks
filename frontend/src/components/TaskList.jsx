function TaskList(props) {
  return (
    <div>
      <h2>Task List</h2>
      {props.tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {props.tasks.map((task) => (
            <li key={task.id || task._id}>
              <strong>{task.title}</strong> — {task.status} —{" "}
              {new Date(task.dueDate).toLocaleDateString()}
              <button onClick={() => props.onEdit(task)}>Edit</button>
              <button onClick={() => props.onDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
