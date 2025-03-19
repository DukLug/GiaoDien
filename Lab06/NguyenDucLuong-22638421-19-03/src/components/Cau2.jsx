import { useReducer, useRef, useState } from 'react';



function Cau2() {
    const [tasks, setTasks] = useState([]);
    const nameInputRef = useRef();
    const contentInputRef = useRef();

    const handleAddTask = () => {
        const name = nameInputRef.current.value.trim();
        const content = contentInputRef.current.value.trim();

        if(name && content){
            const newTask = {
                id: Date.now(),
                name: name,
                content: content,
            };
            setTasks((prevTask) => [...prevTask, newTask]);

            nameInputRef.current.value = '';
            contentInputRef.current.value = '';
        }
    };

    const handleEditTask = (id) => {
        const taskToEdit = tasks.find(tasks => tasks.id === id);
        if (taskToEdit) {
            nameInputRef.current.value = taskToEdit.name;
            contentInputRef.current.value = taskToEdit.content;
      
            setTasks(tasks.filter(tasks => tasks.id !== id));
          }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(tasks=>tasks.id !== id))
    };
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 m-1">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-semibold text-center mb-6">To Do App</h1>

        <div className="mb-4">
          <input
            ref={nameInputRef}
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Task Name"
          />
          <textarea
            ref={contentInputRef}
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Task Content"
            rows="3"
          ></textarea>
          <button
            className="w-full mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={handleAddTask}
          >
            {tasks.some(task => task.name === nameInputRef.current.value.trim()) ? 'Edit Task' : 'Add Task'}
          </button>
        </div>

        <div>
          {tasks.length === 0 ? (
            <p className="text-center text-gray-400">No tasks yet</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex flex-col p-2 mb-4 border border-gray-300 rounded"
                >
                  <div className="flex justify-between">
                  <h3 className="font-semibold text-sm w-1/2 truncate">{task.name}</h3>
                    <button
                      className="text-blue-500"
                      onClick={() => handleEditTask(task.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm break-words">{task.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cau2;
