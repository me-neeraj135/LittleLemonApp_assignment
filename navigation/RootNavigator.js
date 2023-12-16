import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screen/WelcomeScreen";
import SubscribeScreen from "../screen/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        options={{ title: "Welcome" }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ title: "Subscribe" }}
        name="Subscribe"
        component={SubscribeScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
