function TaskDetails({ task }) {
  if (!task) {
    return (
      <div className="p-4 bg-white rounded-lg shadow mt-4">
        <p className="text-gray-600">Select a task to see details</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow mt-4">
      <h3 className="text-xl font-semibold mb-2 text-blue-600">Task Details</h3>
      <p className="text-gray-800"><span className="font-medium">Title:</span> {task.title}</p>
      <p className="text-gray-800"><span className="font-medium">Description:</span> {task.description}</p>
      <p className="text-gray-800"><span className="font-medium">Status:</span> {task.status}</p>
      <p className="text-gray-800">
        <span className="font-medium">Due Date:</span> {new Date(task.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskDetails;
