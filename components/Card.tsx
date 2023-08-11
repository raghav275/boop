import React from "react";
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Link, router } from "expo-router";
import { User } from "../types";
import { TouchableOpacity } from "react-native-gesture-handler";
type Props = {
  user: User;
};
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Card = ({ user }: Props) => {
  const { name, image, bio } = user;
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => router.push("/modal")}>
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.image}
        >
          <View style={styles.cardInner}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fefefe",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: "100%",
    height: height / 3,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 25,
  },
});

export default Card;
