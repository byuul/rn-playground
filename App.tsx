/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import DateHead from "./components/DateHead";
import AnddTodo from "./components/AddTodo";
import Empty from "./components/Empty";

function App(): React.JSX.Element {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <AnddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;
