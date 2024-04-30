import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextComponent from "../components/TextComponent";
import GameOverImage from "../assets/success.png";
import { Colors } from "../constant/Colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOver = ({ userNumber, guessRounds, onStartNewGame }) => {
  return (
    <View style={styles.rootApp}>
      <TextComponent>GameOver</TextComponent>
      <View style={styles.imageView}>
        <Image source={GameOverImage} style={styles.image} />
      </View>
      <Text style={styles.text}>
        Your Phone Needed{" "}
        <Text style={styles.textHightLight}>{guessRounds}</Text> Next To Get
        Your Round Number{" "}
        <Text style={styles.textHightLight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame} style={styles.btn}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootApp: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 99999,
    borderColor: Colors.primary,
    borderWidth: 5,
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  textHightLight: {
    color: Colors.primary,
    fontFamily: "OpenSansBold",
  },
  btn: {
    width: 150,
    backgroundColor: Colors.primary,
    height: 50,
    marginTop: 10,
  },
});
