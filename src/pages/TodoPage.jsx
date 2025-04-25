import React, { useEffect, useState } from "react";
import InputBar from "../components/InputBar";
import TaskList from "../components/TaskList";
import Spinner from "../components/Spinner";
import logo from "../assets/logo.svg";
import {
  generateTasks,
  fetchTasks,
  addTask as apiAddTask,
  deleteTask as apiDeleteTask,
  updateTask as apiUpdateTask,
  toggleComplete as apiToggleComplete,
} from "../services/apiService";

function TodoPage() {
  const [userTask, setUserTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sessionTasks, setSessionTasks] = useState([]);

  const fetchGeneratedTasks = async (prompt) => {
    setIsLoading(true);
    setError("");
    try {
      const { tasks: generatedTasks } = await generateTasks(prompt);

      setTasks(generatedTasks);
    } catch (error) {
      console.error("Error generating tasks:", error);
      setError("Error generating tasks");
    }
    setIsLoading(false);
  };

  const addTask = () => {
    if (userTask.trim() === "") return;
    const newTask = {
      _id: Date.now().toString(), //temporary for now this is supposed to work for without an official be
      title: userTask.trim(),
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  const addGeneratedTask = () => {
    if (userTask.trim() === "") return;
    fetchGeneratedTasks(userTask);
  };

  const clearText = () => {
    setUserTask("");
  };

  // const handleToggleComplete = (id) => {
  //   const updated = tasks.map((task) =>
  //     task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
  //   );
  //   setTasks(updated);
  // };

  const handleToggleComplete = async (id, currentIsCompleted) => {
    // Function to toggle task completion status on the backend
    try {
      await apiToggleComplete(id, !currentIsCompleted);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, isCompleted: !currentIsCompleted } : task
        )
      );
    } catch (error) {
      console.error("Error toggling complete:", error);
      setError("Failed to update task status.");
    }
  };

  // const handleDeleteTask = (id) => {
  //   const filtered = tasks.filter((task) => task._id !== id);
  //   setTasks(filtered);
  // };

  const handleDeleteTask = async (id) => {
    // Function to delete a task from the backend
    try {
      await apiDeleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Failed to delete task.");
    }
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task._id === taskId);
    setEditingTaskId(taskId);
    setEditedText(taskToEdit.title);
  };

  // const handleUpdateTask = (taskId) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task._id === taskId ? { ...task, title: editedText } : task
  //   );
  //   setTasks(updatedTasks);
  //   setEditingTaskId(null);
  //   setEditedText("");
  // };

  const handleUpdateTask = async (taskId) => {
    if (editedText.trim() === "") return;

    try {
      const updatedTask = await apiUpdateTask(taskId, { title: editedText });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, title: editedText } : task
        )
      );

      setEditingTaskId(null);
      setEditedText("");
    } catch (error) {
      console.error("Error updating task:", error);
      setError("Failed to update task.");
    }
  };

  return (
    <main>
      <div className="wrapper">
        <header className="text-center flex flex-col items-center gap-3">
          <div className=" hero bounce-in">
            <img className="size-36  " src={logo} alt="logo" />
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
            addTask={addGeneratedTask}
            clearText={clearText}
          />
        </header>

        {isloading && (
          <div className="flex justify-center items-center mt-15  ">
            <Spinner />
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center mt-5">
            <p>{error}</p>
          </div>
        )}
        {!isloading && tasks.length > 0 && (
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
        )}
      </div>
    </main>
  );
}

export default TodoPage;
