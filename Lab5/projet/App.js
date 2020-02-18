import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Header from './Component/Header';
import InputBar from './Component/InputBar';
import Delete from './Component/Delete'


const Entry = (props) => {
  return (
    <View style={styles.entry}>
      <TouchableOpacity style={styles.couleurUntoggled} onPress={props.toggle}>
      <Text>{props.title}</Text>
      </TouchableOpacity>
      <Delete action={() => this.removeItem(props.title)}/>
    </View>
  );
};


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
    /* 
    
    A Faire:
      fonction qui change l'etat d'un todo done: false -> true ( et inversement)

    tips: La fonction Map peux etre utile
    */
   if(item.state.todos.done == false)
   {
    item = { id: item.id, title: item.title,done: true }
    this.TouchableOpacity.couleurtoggled 
   }
   else{
    item = { id: item.id, title: item.title,done: false }
    this.TouchableOpacity.couleurUntoggled
  }

   //il faut juste ajuster la couleur du texte et tout devrait être good pour totalement tester
    item.setState({todos:[...item.state.todos,item]})

  }

  removeItem(item) {
    this.setState({})

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

        {/*
        code du prof


                <InputBar 
        addNewItem={() => this.addNewItem() }
        textChange={todoInput => this.setState({todoInput})} 
        todoInput={this.state.todoInput}
        />

        */}
        {
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => (
              <Entry
                id={item.id}
                title={item.title}
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
    },
  couleurtoggled: {
    color: 'gray'
  },
  couleurUntoggled: {
    color: 'black'
  }
});
