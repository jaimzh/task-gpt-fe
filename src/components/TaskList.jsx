import React from "react";

function TaskList({
  tasks,
  handleToggleComplete,
  handleDeleteTask,
  handleEditTask,
  editingTaskId,
  editedText,
  setEditedText,
  handleUpdateTask,
}) {
  const handleKeyPress = (e, taskId) => {
    if (e.key === "Enter") {
      handleUpdateTask(taskId);
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={task.id || index}
          className="task-item flex items-center justify-between p-2 rounded-lg mb-2"
        >
          <div className="flex items-center gap-2">
            <input
            
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleToggleComplete(task.id)}
              className="w-4 h-4 accent-[var(--color-orange)]"
            />

            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e, task.id)}
                className="text-white rounded "
                autoFocus
              />
            ) : (
              <p
                className={
                  task.isCompleted
                    ? "line-through text-gray-500"
                    : "text-[#d6d6d6]"
                }
              >
                {task.title}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            {editingTaskId === task.id ? (
              <button
                className="text-green-400 text-[14px] h-auto hover:text-white transition duration-200"
                onClick={() => handleUpdateTask(task.id)}
              >
                Save
              </button>
            ) : (
              <>
                <button
                  className="text-orange-400 hover:text-white transition duration-200"
                  onClick={() => handleEditTask(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    className="w-3 h-3"
                  >
                    <path d="M10.715 -0.000976562C10.5152 -0.000976562 10.3174 0.0389464 10.1332 0.116448C9.95019 0.193468 9.78428 0.306058 9.64512 0.447676L1.40732 8.64549C1.34616 8.70635 1.30179 8.782 1.27853 8.86508L0.0185299 13.3651C-0.0301752 13.539 0.0187291 13.7257 0.146458 13.8535C0.274188 13.9812 0.46088 14.0301 0.634827 13.9814L5.13483 12.7214C5.21791 12.6981 5.29356 12.6537 5.35442 12.5926L13.5521 4.3549L13.5535 4.35355C13.6934 4.21438 13.8045 4.04896 13.8804 3.86676C13.9566 3.68398 13.9958 3.48792 13.9958 3.2899C13.9958 3.09188 13.9566 2.89582 13.8804 2.71303C13.8045 2.53083 13.6934 2.3654 13.5535 2.22624L13.5521 2.2249L11.7859 0.448721C11.6466 0.306611 11.4803 0.193657 11.2968 0.116448C11.1126 0.0389464 10.9148 -0.000976562 10.715 -0.000976562Z" />
                  </svg>
                </button>

                <button
                  className="text-orange-400 hover:text-red-500 transition duration-200"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    className="w-4 h-4"
                  >
                    <path
                      d="M1 4.17647H17M6 1H12M7 14.7647V8.41177M11 14.7647V8.41177M12.5 19H5.5C4.39543 19 3.5 18.0519 3.5 16.8824L3.0434 5.27937C3.01973 4.67783 3.47392 4.17647 4.04253 4.17647H13.9575C14.5261 4.17647 14.9803 4.67783 14.9566 5.27937L14.5 16.8824C14.5 18.0519 13.6046 19 12.5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
