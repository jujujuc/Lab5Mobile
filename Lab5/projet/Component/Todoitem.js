import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import Delete from './Delete';

export default class TodoItem extends React.Component {

    render(){
        const todoItem = this.props.todoItem;

        return (
            <View style={styles.entry}>
            <TouchableOpacity style={styles.TextToDo} onPress={props.action}>
              <Text>{props.title}</Text>
            </TouchableOpacity>
            <Delete action={() => removeItem()}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingTop: 5
        
    },

    //Style du texte quand il est "A faire"
    textTodo: {
        color: '#313131'
    },

    //Style du texte quand il est "Done"
    textDone: {
        color: '#AAAAAA'
    },

    //Style du boutton quand il est "A faire"
    todoRemoveButton:{
        width: 100,
        height: 35,
        backgroundColor: 'rgba(550, 0, 0, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Style du boutton quand il est "Done"
    doneRemoveButton: {
        width: 100,
        height: 35,
        backgroundColor: 'rgba(500, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    removeButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700'
    }
})