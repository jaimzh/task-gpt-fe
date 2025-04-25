import axios from "axios";

// const API_URL = "http://localhost:5000";
const API_URL = https://task-gpt-be.onrender.com

export const generateTasks = async (prompt) => {
  try {
    const response = await axios.post(`${API_URL}/generate-ai-tasks`, {
      prompt,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating tasks:", error);
    throw error;
  }
};

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (newTask) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, newTask);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/tasks/${id} `);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};


export const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const toggleComplete = async (id, isCompleted) => {
  try {
    const response = await axios.patch(`${API_URL}/tasks/${id}/completed`, {
      isCompleted,
    });
    return response.data;
  } catch (error) {
    console.error("Error toggling complete:", error);
    throw error;
  }
};


