import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextComponent from "../components/TextComponent";
import { Colors } from "../constant/Colors";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import { Entypo } from "@expo/vector-icons";
import GuessLogs from "../components/GuessLogs";

const Game = ({ number, handlerChangeGameOverVariable }) => {
  let minGuess = 1;
  let maxGuess = 100;

  const generateGuessNumberRandom = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateGuessNumberRandom(min, max, exclude);
    } else {
      return randomNumber;
    }
  };

  const initialState = generateGuessNumberRandom(1, 100, number);
  const [guessNumber, setGuessNumber] = useState(initialState);
  const [guessRounds, setGuessRounds] = useState([
    { id: Math.random(), number: initialState },
  ]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && guessNumber < number) ||
      (direction === "higher" && guessNumber > number)
    ) {
      Alert.alert("Don't lie", "Yeah"[{ text: "Sorry", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      maxGuess = guessNumber;
    } else {
      minGuess = guessNumber + 1;
    }

    let newRandomGuessNumber = generateGuessNumberRandom(
      minGuess,
      maxGuess,
      guessNumber
    );
    setGuessNumber(newRandomGuessNumber);
    setGuessRounds((prevGuessRound) => [
      { id: Math.random(), number: newRandomGuessNumber },
      ...prevGuessRound,
    ]);
  };

  console.log(guessNumber, number);

  useEffect(() => {
    if (guessNumber === number) {
      handlerChangeGameOverVariable(guessRounds.length);
    }
  }, [handlerChangeGameOverVariable, number, guessNumber]);

  useEffect(() => {
    minGuess = 1;
    maxGuess = 100;
  }, []);

  return (
    <View style={styles.rootScreen}>
      <TextComponent>Opening Guess</TextComponent>
      <View style={styles.guessNumberView}>
        <TextComponent style={styles.guessNumber}>{guessNumber}</TextComponent>
      </View>
      <Card style={styles.card}>
        <Text style={styles.text}>Higher or Lower</Text>
        <View style={styles.buttonView}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Entypo name="minus" size={24} color="black" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            <Entypo name="plus" size={24} color="black" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.guessLogsContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogs
              rounds={guessRounds.length - itemData.index}
              guess={itemData.item.number}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 15,
  },
  card: {
    height: 90,
  },
  text: {
    paddingTop: 5,
    color: Colors.yellow,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
  },
  guessNumberView: {
    marginVertical: 20,
    alignItems: "center",
  },
  guessNumber: {
    color: Colors.yellow,
    borderColor: Colors.yellow,
    width: "80%",
    padding: 20,
    fontFamily: "OpenSansBold",
  },
  guessLogsContainer: {
    flex: 1,
    padding: 16,
  },
});
