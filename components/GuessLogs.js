import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constant/Colors";

const GuessLogs = ({ guess, rounds }) => {
  return (
    <View style={styles.guessLogsView}>
      <Text>#{rounds}</Text>
      <Text> Opponent's Guess {guess}</Text>
    </View>
  );
};

export default GuessLogs;

const styles = StyleSheet.create({
  guessLogsView: {
    width: "100%",
    backgroundColor: Colors.yellow,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.black,
  },
});
