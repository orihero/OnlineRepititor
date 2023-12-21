import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";
import Logo from "../../components/Logo";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";
import ForgotPassHooks from "./hooks";

const ForgotPassScreen = ({ length, disabled }: any) => {
  const inputRefs = useRef<Array<TextInput>>([]);
  const [queue, setQueue] = useState<number | any>(0);
  const [timer, setTimer] = useState<number>(60);
  const {onHomeHooks} = ForgotPassHooks()

  const dum = queue === 2.5;

  const handleChange = (text: string, index: number) => {
    if (text.length !== 0) {
      return inputRefs.current[index + 1]?.focus();
    }
    return inputRefs.current[index - 1]?.focus();
  };

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const { nativeEvent } = e;

    if (nativeEvent.key === "Backspace") {
      handleChange("", index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [dum]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.forgotPassContainer}>
        <View>
          <Logo />
        </View>
        <Text style={styles.sms}>Введите код, полученный в SMS</Text>
        <View style={styles.inputPass}>
          {[1, 2, 3, 4, ...new Array(length)].map((item, index) => {
            return (
              <TextInput
                style={styles.input}
                ref={(ref) => {
                  if (ref && !inputRefs.current.includes(ref)) {
                    inputRefs.current = [...inputRefs.current, ref];
                  }
                }}
                maxLength={1}
                key={index}
                keyboardType={"number-pad"}
                contextMenuHidden
                selectTextOnFocus
                editable={!disabled}
                testID={`OTPInput-${index}`}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(event) => handleBackspace(event, index)}
              />
            );
          })}
        </View>
        <TouchableOpacity style={styles.button} onPress={onHomeHooks}>
          <Text style={styles.buttonText}>Войти в ЛК</Text>
        </TouchableOpacity>
        <Text style={styles.timer}>
          Повторная отправка кода в сообщении возможна через 0:
          {timer <= 0 ? 0 : timer}
        </Text>
        <Pressable style={styles.againPass}>
          <Text
            onPress={() => {
              timer <= 0 ? setTimer(60) : "";
            }}
            style={
              timer <= 0
                ? {
                    textAlign: "center",
                    color: "red",
                    lineHeight: 20,
                  }
                : {
                    textAlign: "center",
                    color: "#C9C9C9",
                    lineHeight: 20,
                  }
            }
          >
            Отправить код ещё раз
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassScreen;
