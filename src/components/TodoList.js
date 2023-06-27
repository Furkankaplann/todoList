import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';

import todoListStyle from '../styles/todoListStyle';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);

  const onDelete = id => {
    dispatch(deleteTask({id}));
  };

  const renderItem = ({item}) => {
    return (
      <View style={todoListStyle.item}>
        <Text style={todoListStyle.title}>{item.name}</Text>
        <TouchableOpacity
          style={todoListStyle.deleteButton}
          onPress={() => onDelete(item.id)}>
          <Image
            source={require('../assets/icons/delete.png')}
            style={todoListStyle.image}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
