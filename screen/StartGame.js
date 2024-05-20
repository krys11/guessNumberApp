import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../constant/Colors";
import TextComponent from "../components/TextComponent";
import Card from "../components/Card";

const StartGame = ({ onLoadScreen }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const handlerChangeEnteredNumber = (text) => {
    setEnteredNumber(text);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const confirmBtnPress = () => {
    const numberChose = parseInt(enteredNumber);

    if (isNaN(numberChose) || numberChose < 0 || numberChose > 99) {
      Alert.alert("invalid number", "Check your number", [
        { title: "Okay", style: "destructive", onPress: resetHandler },
      ]);

      return;
    }

    onLoadScreen(numberChose);
  };

  const deviceHeightDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.rootScreen}>
      <KeyboardAvoidingView style={styles.rootScreen} behavior="position">
        <View style={[styles.rootScreen, { marginTop: deviceHeightDistance }]}>
          <View style={styles.textView}>
            <TextComponent>Guess My Number</TextComponent>
          </View>

          <Card style={styles.card}>
            <Text style={styles.textInstruction}>Enter Guess Number</Text>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={(text) => handlerChangeEnteredNumber(text)}
            />
            <View style={styles.btnContainer}>
              <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmBtnPress}>Confirm</PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 40 : 100,
  },
  textView: {
    alignItems: "center",
  },
  textInstruction: {
    color: Colors.white,
    paddingTop: 5,
  },
  card: {
    height: 150,
  },
  input: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.yellow,
    width: 45,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: Colors.yellow,
    fontFamily: "OpenSansBold",
  },
  btnContainer: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
  },
});
