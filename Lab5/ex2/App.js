import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Component/Header';
import InputBar from './Component/InputBar';


const Entry = (props) => {
  return (
    <View style={styles.entry}>
      <Text>{props.title}</Text>
    </View>
  );
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtInput: '',
      entryList: [
        { id: 0, title: "This is a PlaceHolder" }
      ]
    }
  }

  addNewEntries() {
    var newEntry = { id: this.state.entryList.length, title: this.state.txtInput }
    this.setState({ entryList: [...this.state.entryList, newEntry] });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header title="Touch & Inputs demo" />
        <InputBar
          txtInput={this.state.txtInput}
          onChangeText={txtInput => this.setState({ txtInput })}
          action={() => this.addNewEntries()}
        />
        {
          <FlatList
            data={this.state.entryList}
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
  }
});
