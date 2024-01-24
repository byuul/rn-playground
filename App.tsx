/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from "react";
import {Button, SafeAreaView, useColorScheme, View} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";
import Box from "./components/Box";

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useColorScheme() === "dark";

  const onPress = () => {
    setVisible(!visible);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title="toggle" onPress={onPress} />
      {visible && <Box rounded size="large" color="blue" />}
    </SafeAreaView>
  );
}

export default App;
