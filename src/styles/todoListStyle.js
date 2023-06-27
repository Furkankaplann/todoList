import {StyleSheet} from 'react-native';

const todoListStyle = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    marginRight: 10,
  },
  deleteButton: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});

export default todoListStyle;
