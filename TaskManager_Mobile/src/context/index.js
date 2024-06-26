import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const TaskContext = createContext();

const baseUrl = 'http://localhost:3000/tasks'

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(baseUrl);
      setTasks(response.data);
      await AsyncStorage.setItem('tasks', JSON.stringify(response.data));
    } catch (error) {
      const localTasks = await AsyncStorage.getItem('tasks');
      if (localTasks) {
        setTasks(JSON.parse(localTasks));
      }
    }
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post(baseUrl, task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, updatedTask);
      setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
