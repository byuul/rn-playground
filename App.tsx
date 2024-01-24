/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {SafeAreaView, useColorScheme, View} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import Box from "./components/Box";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Box rounded size="large" color="blue" />
    </SafeAreaView>
  );
}

export default App;
