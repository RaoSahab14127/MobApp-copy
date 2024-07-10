import React from "react";
import { StyleSheet, View } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
export default function Loader() {
  return (
    <View style={styles.container}>
      <UIActivityIndicator
        size={36}
        color="#3A57E8"
        style={styles.spinner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E7E7",
    position: "absolute",
    zIndex: 999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  spinner: {
    alignSelf: "center",
    borderRadius: 2,
    padding: 5,
  },
});
