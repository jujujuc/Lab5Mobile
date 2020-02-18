import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const Delete = (props) => {
    return(
        <View style={styles.inputContainer}>
            
            {
                // -- TOUCHABLE OPACITY
                /*
                    les props:
                    onPress -> Action qui est déclenché quand on touche "TouchableOpacity" 
                */
            }

            <TouchableOpacity style={styles.homeMadeButton} 
            onPress={props.action}>
                <Text style={styles.buttonText}>DELETE</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 45,
    },

    homeMadeButton: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FF0000"
    },

    buttonText: {
        textAlign: 'center',
        color: 'black'
      }

});

export default Delete