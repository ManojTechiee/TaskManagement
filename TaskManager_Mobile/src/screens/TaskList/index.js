import React, { useContext,useState ,useEffect} from 'react';
import { View, FlatList, Button , SafeAreaView} from 'react-native';
import { TaskContext } from '../../context/index';
import TaskItem from '../../components/TaskItem/index';
import styles from './style';
const TaskList = ({ navigation }) => {
  const { tasks:taskContext } = useContext(TaskContext);
  const [tasks, settasks] = useState(taskContext)
  useEffect(() => {
   settasks(taskContext)
  }, [taskContext])
  return (
    <SafeAreaView style={styles.container}>
         <Button
        title="Add Task"
        onPress={() => navigation.navigate('TaskForm')}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
      />
     
    </SafeAreaView>
  );
};




export default TaskList;
