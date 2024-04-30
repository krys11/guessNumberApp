import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constant/Colors";

const TextComponent = (props) => {
  return (
    <Text style={[styles.title, { ...props.style }]}>{props.children}</Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: Colors.white,
    textAlign: "center",
    // fontWeight: "bold",
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 10,
    borderRadius: 5,
    fontFamily: "OpenSansRegular",
  },
});
