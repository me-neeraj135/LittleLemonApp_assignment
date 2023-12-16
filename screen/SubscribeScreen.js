import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Logo from "../screen/Logo";
import { validateEmail } from "../utils/index";

const SubscribeScreen = ({ Navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "Android" ? "padding" : "height"}
      style={Styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          <Logo />
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={Styles.centeredView}>
              <View style={Styles.modalView}>
                <Text style={Styles.modalText}>
                  Thanks for Subscribing!{"\n"} stay tuned!
                </Text>
                <Pressable
                  style={[Styles.modelButton, Styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={Styles.textStyle}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Text style={Styles.subscribeInfo}>
            Subscribe to our newsletter for our {"\n"} latest delicious recipes!
          </Text>
          <TextInput
            style={Styles.input}
            value={email}
            minLength={5}
            maxLength={30}
            placeholder="Type your email"
            keyboardType={"email-address"}
            onChangeText={onChangeEmail}
          />
          {validateEmail(email) ? (
            <Pressable
              style={Styles.buttonContainer}
              onPress={() => setModalVisible(true)}
            >
              <Text style={Styles.button}>Subscribe</Text>
            </Pressable>
          ) : (
            <Text style={Styles.disableButton}>Subscribe</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  subscribeInfo: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#40524C",
    marginVertical: 30,
    padding: 10,
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#40524C",
    padding: 10,
  },
  button: {
    fontSize: 20,
    color: "#ffff",
    textAlign: "center",
  },
  disableButton: {
    width: "100%",
    fontSize: 20,
    color: "#ffff",
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "gray",
  },

  // model

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  modalView: {
    width: "80%",
    margin: 15,
    backgroundColor: "white",
    borderRadius: 15,
    paddingTop: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  modelButton: {
    padding: 10,
    elevation: 0.8,
  },
  buttonClose: {
    width: "100%",
  },
  textStyle: {
    color: "#3583E5",
    fontWeight: "bold",
    textAlign: "center",
  },
});
