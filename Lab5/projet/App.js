import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Header from './Component/Header';
import InputBar from './Component/InputBar';
import TodoItem from './Component/Todoitem';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: "Use the app",done: false }
      ]
    }
  }
  id = 1;
  addNewEntries() {
    var newEntry = { id: this.id, title: this.state.todoInput }
    this.id++
      
    this.setState({ todos: [newEntry, ...this.state.todos] });
  }

  
  toggle(item) {
    const array = this.state.todos;
    array.map((elem) =>
      {
        if(elem.id === item.id){
          item.done = !item.done
        }
      })
    this.setState({todos: array})
  }

  removeItem(item) {
    const todos = this.state.todos.filter(todos => todos.id !== item.id)
    this.setState({todos : todos})
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header title="TODO" />
        <InputBar
          todoInput={this.state.todoInput}
          onChangeText={todoInput => this.setState({ todoInput })}
          action={() => this.addNewEntries()}
        />
        {
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => (
              <TodoItem 
                todoItem={item} removeItem={() => this.removeItem(item)} toggle={() => this.toggle(item)}
              />
            )} 
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 23
  },
  entry: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  }
});
