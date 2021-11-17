import React from "react";
import Navigation from "./components/Navigation/index";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
