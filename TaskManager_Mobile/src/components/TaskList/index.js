// components/TaskList.js
import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from '../TaskItem/index';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onEdit={() => onEdit(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TaskList;
