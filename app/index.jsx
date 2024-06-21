import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View
      className="flex-1 justify-center items-center"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Sorah!</Text>
      <Link href={"/profile"} style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default index;
