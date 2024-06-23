// screens/TaskForm.js
import React, { useContext, useState } from 'react';
import { View, TextInput, SafeAreaView,Alert} from 'react-native';
import { TaskContext } from '../../context/index';
import styles from './style';
import CustomButton from '../../components/customButton/index';

const TaskForm = ({ route, navigation }) => {
  
  const { addTask, updateTask } = useContext(TaskContext);
  const [title, setTitle] = useState(route.params?.task?.title || '');
  const [description, setDescription] = useState(route.params?.task?.description || '');
  const isUpdate = Boolean(route.params?.task);


  const handleSubmit = () => {
    if (!title.trim()) {
      Alert.alert('Validation Error', 'Title cannot be empty.');
      return;
    }
    const newTask = { title, description };
    if (isUpdate) {
      updateTask(route.params.task._id, newTask);
    } else {
      addTask(newTask);
    }
    navigation.goBack();
  };
  
const handleReset =()=>{
  setTitle('')
  setDescription('')
}
  return (
    <SafeAreaView style={styles.container}>
      
    <View style={styles.inputWrap}>
    <TextInput
      style={styles.input}
      placeholder="Title"
      value={title}
      onChangeText={setTitle}
    />
    <TextInput
      style={[styles.input, styles.textArea]}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
      multiline
      numberOfLines={4}
    />
    </View>
    <CustomButton
    text={isUpdate ? "Update Task" : "Add Task"}
    onPress={handleSubmit}
    />
   <CustomButton
    text="Reset All"
    onPress={handleReset}
    />
  </SafeAreaView>
  );
};

export default TaskForm;
