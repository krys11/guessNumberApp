import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constant/Colors";

const PrimaryButton = (props) => {
  const handlerPress = () => {
    props.onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.btnStyle, { ...props.style }]}
      onPress={handlerPress}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colors.black500,
    borderRadius: 8,
    height: 35,
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
  },
  text: {
    color: "white",
    fontFamily: "OpenSansBold",
  },
});
