import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TaskContext } from '../../context/index';
import styles from './style';
import CustomButton from '../customButton';

const TaskItem = ({ task, navigation }) => {
  const { _id, title, description, completed } = task;
  const { deleteTask, updateTask } = useContext(TaskContext);

  const toggleComplete = () => {
    updateTask(_id, { ...task, completed: !completed });
  };

  const handleDelete = () => {
    deleteTask(_id);
  };

  const handleEdit = () => {
    navigation.navigate('TaskForm', { task });
  };

  const textDecoration = {
    textDecorationLine: completed ? 'line-through' : 'none',
  };

  return (
    <View style={styles.taskCard}>
      <Text style={[styles.taskTitle, textDecoration]}>{title}</Text>
      {description ? (
        <Text style={[styles.taskDescription, textDecoration]}>{description}</Text>
      ) : null}
      <View style={styles.buttonContainer}>
        <CustomButton text={completed ? 'Uncomplete' : 'Complete'} onPress={toggleComplete} />
        <CustomButton text="Delete" onPress={handleDelete} />
        <CustomButton text="Edit" onPress={handleEdit} />
      </View>
    </View>
  );
};



export default TaskItem;
