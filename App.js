import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Pessoa from "./src/Pessoa";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: "1", nome: "Joao", idade: 20, email: "Joao@gmail.com" },
        { id: "2", nome: "Marcelo", idade: 23, email: "Marcelo@gmail.com" },
        { id: "3", nome: "Henrique", idade: 33, email: "Henrique@gmail.com" },
        { id: "4", nome: "Marcelo", idade: 43, email: "Marecelo@gmail.com" },
        { id: "5", nome: "Pedro", idade: 11, email: "Pedro@gmail.com" },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) =>item.id}
          data={this.state.feed}


          keyExtractor={(item) => item.id}

          renderItem={({ item }) => <Pessoa data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

