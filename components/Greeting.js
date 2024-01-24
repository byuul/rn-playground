import React from "react";
import {View, Text} from "react-native";

function Greeting(props) {
  return (
    <View>
      <Text>hello {props.name}</Text>
    </View>
  );
}

export default Greeting;

Greeting.defaultProps = {
  name: "하하하하",
};
