import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/Todoitem';

export default class App extends React.Component {
  constructor () {
    super();

    // Vous etes libre de modifier le contenus du state, si pertinent
    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Use the app', done: false}
      ]
    }
  }

  addNewItem() {
    
    /* 
    
      A Faire:
       fonction qui ajoute un nouveau item a la liste des todos
    
    */

    this.setState({
      todos,
      todoInput: ''
    });
  }

  toggle(item) {
    /* 
    
    A Faire:
      fonction qui change l'etat d'un todo done: false -> true ( et inversement)

    tips: La fonction Map peux etre utile
    */


  }

  removeItem(item) {
    /* 

    A faire:
      fonction qui delete un todo (item)
      
    tips: La fonction Filter peux etre utile
    
    */

  }

  render () {
    
    return (
      <View style={styles.container}>
        <Header title="TODO" />

        <InputBar 
        addNewItem={() => this.addNewItem() }
        textChange={todoInput => this.setState({todoInput})} 
        todoInput={this.state.todoInput}
        />

        {/* 
    
          A Faire
          
          tips: Une FlatList ca serais bien ici

        */}


      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 23
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 20
  }
});
