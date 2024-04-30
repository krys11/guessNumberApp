import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constant/Colors";

const Card = (props) => {
  return (
    <View style={[styles.cardView, { ...props.style }]}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: Colors.primary,
    marginTop: 35,
    // height: 150,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
});
