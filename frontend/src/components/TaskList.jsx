function TaskList(props) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Task List</h2>

      {props.tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {props.tasks.map((task) => (
            <li
              key={task.id || task._id}
              className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div
                className="cursor-pointer"
                onClick={() => props.onView && props.onView(task)}
              >
                <p className="font-bold text-lg text-blue-600">
                  {task.title}
                </p>
                <p className="text-sm text-gray-600">
                  {task.status} —{" "}
                  {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </div>

              <div className="mt-2 space-x-2">
                <button
                  onClick={() => props.onEdit(task)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.onDelete(task.id || task._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
