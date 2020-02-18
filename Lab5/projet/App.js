import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Header from './Component/Header';
import InputBar from './Component/InputBar';
import Delete from './Component/Delete'
import TodoItem from './Component/Todoitem';

{
  /*
const Entry = (props) => {
  return (

  );
};
*/
}


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

  addNewEntries() {
    var newEntry = { id: this.state.todos.length, title: this.state.todoInput }
      
    this.setState({ todos: [newEntry, ...this.state.todos] });


    /*
    code par le prof 

      this.setState({
      todos,
      todoInput: ''
    });
    */
  }

  
  toggle(item) {
   if(this.state.todos.done == false)
   {
    item = { id: item.id, title: item.title,done: true }
   }
   else{
    item = { id: item.id, title: item.title,done: false }
  }

   //il faut juste ajuster la couleur du texte et tout devrait être good pour totalement tester
    this.setState({todos:[...this.state.todos,item]})
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
