import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import TextComponent from "../components/TextComponent";
import GameOverImage from "../assets/success.png";
import { Colors } from "../constant/Colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOver = ({ userNumber, guessRounds, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.rootApp}>
        <TextComponent>GameOver</TextComponent>
        <View style={[styles.imageView, imageStyle]}>
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
    </ScrollView>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootApp: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    // width: 300,
    // height: 300,
    // borderRadius: 99999,
    overflow: "hidden",
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
