import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Pessoa extends Component {
  render() {
    return (
      <View style={styles.pessoa}>
        <Text style={styles.texto}>Nome:{this.props.data.nome}</Text>
        <Text style={styles.texto}>Idade:{this.props.data.idade}</Text>
        <Text style={styles.texto}>Email:{this.props.data.email}</Text>
        <Text style={styles.texto}>Id:{this.props.data.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pessoa: {
    height: 200,
    backgroundColor: "#ddd",
    margin: 10,
    padding: 10,
  },
  texto: {
    fontSize: 30,
    color: "#fff",
  },
});
