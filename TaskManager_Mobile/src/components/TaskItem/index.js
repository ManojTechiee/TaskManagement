// components/TaskItem.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TaskContext } from '../../context/index';
import styles from './style';
import CustomButton from '../customButton';

const TaskItem = ({ task, navigation }) => {
    const { deleteTask, updateTask } = useContext(TaskContext);
  
    const toggleComplete = () => {
      updateTask(task._id, { ...task, completed: !task.completed });
    };
  
    return (
      <View style={styles.taskCard}>
        <Text style={[styles.taskTitle, { textDecorationLine: task.completed ? 'line-through' : 'none' }]}>
          {task.title}
        </Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
          text={task.completed ? 'Uncomplete' : 'Complete'}
          onPress={toggleComplete}
          />
          <CustomButton
          text="Delete"
          onPress={() => deleteTask(task._id)}
          />
          <CustomButton
          text="Edit"
          onPress={() => navigation.navigate('TaskForm', { task })}
          />
        </View>
      </View>
    );
  };


export default TaskItem;
