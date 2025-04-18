import React, { useState } from "react";
import InputBar from "../components/InputBar";
import TaskList from "../components/TaskList";

function TodoPage() {
  const [userTask, setUserTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const addTask = () => {
    if (userTask.trim() === "") return;
    const newTask = {
      id: tasks.length, //temporary for now
      title: userTask.trim(),
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  const clearText = () =>{
    setUserTask("");
  }

  const handleToggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updated);
  };

  const handleDeleteTask = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTaskId(taskId);
    setEditedText(taskToEdit.title);
  };

  const handleUpdateTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: editedText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditedText("");
  };

  return (
    <main>
      <div className="wrapper">
        <header className="text-center flex flex-col items-center gap-3">
          <div className=" hero">
            <img className="size-36  " src="./logo.svg" alt="" />
            <h1>
              Turn your <span>Ideas </span> <br />
              into <span>Tasks</span>
            </h1>
          </div>
          <h3 className="text-white mt-3.5">
            Just brain dump your plans and we'll sort it out
          </h3>
          <div className="ai-container">Powered by AI✨</div>
          <InputBar
            userTask={userTask}
            setUserTask={setUserTask}
            addTask={addTask}
            clearText={clearText}
          />
        </header>

        {tasks.length > 0 ? (
          <div>
            <h2 className="text-orange font-bold mt-7">Tasks</h2>
            <TaskList
              tasks={tasks}
              handleToggleComplete={handleToggleComplete}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
              handleUpdateTask={handleUpdateTask}
              editingTaskId={editingTaskId}
              editedText={editedText}
              setEditedText={setEditedText}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default TodoPage;
