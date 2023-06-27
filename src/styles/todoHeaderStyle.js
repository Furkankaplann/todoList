import {StyleSheet} from 'react-native';

const todoHeaderStyle = StyleSheet.create({
  todoHeaderContainer: {
    padding: 20,
    marginVertical: 8,
  },
  todoHeadetText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: 'blue',
  },
  todoHeaderView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoHeaderTexInput: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    width: 300,
    borderRadius: 10,
  },
  todoHeaderTouchableOpacity: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
  },
  TouchableOpacityText: {
    color: 'white',
  },
  addText: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default todoHeaderStyle;
