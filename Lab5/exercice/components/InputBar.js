import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            onChangeText={/* A faire */}
            value={/* A faire */}
            />
            <TouchableOpacity style={styles.addButton} onPress={ /* A faire */ }>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowOffset: {width: 0, height: 3},
      shadowColor: '#171717',
      shadowOpacity: .1,
      paddingBottom: 5
    },
    input: {
      backgroundColor: '#F3F3F3',
      flex: 1,
      fontSize: 18,
      height: 45
    },
    addButton: {
        width: 100,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: '700'
    }
});

export default InputBar;