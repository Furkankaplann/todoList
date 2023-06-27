import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTast} from '../redux/taskSlice';
import todoHeaderStyle from '../styles/todoHeaderStyle';

const TodoHeader = () => {
  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('Please enter a task!');
      return;
    }
    dispatch(addTast({id: Math.random().toString(), task: todo}));
    setTodo('');
  };

  const [todo, setTodo] = useState('');
  return (
    <View style={todoHeaderStyle.todoHeaderContainer} >
      <Text style={todoHeaderStyle.todoHeadetText}>Todo List</Text>
      <View style={todoHeaderStyle.todoHeaderView}>
        {/* TextIput */}
        <TextInput
          style={todoHeaderStyle.todoHeaderTexInput}
          placeholder="Add Todo" 
          onChangeText={setTodo}
          value={todo}
        />
        {/* Button */}
        <TouchableOpacity
          style={todoHeaderStyle.todoHeaderTouchableOpacity}
          onPress={onSubmitTask}>
          <Text style={todoHeaderStyle.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;
