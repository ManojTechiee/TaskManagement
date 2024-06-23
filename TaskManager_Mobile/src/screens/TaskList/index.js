import React, { useContext } from 'react';
import { Text, FlatList, Button, SafeAreaView } from 'react-native';
import { TaskContext } from '../../context/index';
import TaskItem from '../../components/TaskItem/index';
import styles from './style';
const TaskList = ({ navigation }) => {

  const { tasks } = useContext(TaskContext);
  const noData = () => (
    <Text style={styles.noDataText}>No tasks available</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('TaskForm')}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} navigation={navigation} />}
        keyExtractor={(item) => item._id}
        scrollEnabled={true}
        ListEmptyComponent={noData}
      />
    </SafeAreaView>
  );
};

export default TaskList;
