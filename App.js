import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Game from "./screen/Game";
import StartGame from "./screen/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import Homebackground from "./assets/background.png";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./constant/Colors";
import GameOver from "./screen/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [number, setNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    OpenSansBold: require("./fonts/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const getUserChoseNumber = (number) => {
    setNumber(number);
    setGameIsOver(false);
  };

  const handlerChangeGameOverVariable = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const onStartNewGame = () => {
    setNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGame onLoadScreen={getUserChoseNumber} />;

  if (number) {
    screen = (
      <Game
        number={number}
        handlerChangeGameOverVariable={handlerChangeGameOverVariable}
      />
    );
  }

  if (number && gameIsOver) {
    screen = (
      <GameOver
        userNumber={number}
        guessRounds={guessRounds}
        onStartNewGame={onStartNewGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary, Colors.yellow]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={Homebackground}
          style={styles.rootScreen}
          imageStyle={styles.imgStyle}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imgStyle: {
    opacity: 0.2,
  },
});
