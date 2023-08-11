import { StyleSheet, Image, Dimensions, FlatList } from "react-native";

import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { TouchableOpacity } from "react-native-gesture-handler";
import { user } from "@/mockData/user";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_WIDTH = Dimensions.get("window").width;
export default function TabThreeScreen() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    // <GiftedChat
    //   messages={messages}
    //   onSend={(messages) => onSend(messages)}
    //   user={{
    //     _id: 1,
    //   }}
    // />
    <FlatList
      data={user}
      renderItem={({ item }) => {
        //this.setState({fname: name});
        return (
          <TouchableOpacity onPress={() => router.push("/chat")}>
            <View style={styles.nameContainer}>
              <Image style={styles.profile} source={{ uri: item.image }} />
              <View>
                <Text style={styles.info}>{item.name}</Text>
                <Text
                  style={[
                    styles.info,
                    { fontSize: DEVICE_HEIGHT * 0.02, color: "grey" },
                  ]}
                >
                  {item.bio}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  nameContainer: {
    marginHorizontal: DEVICE_WIDTH * 0.04,
    marginTop: DEVICE_HEIGHT * 0.02,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  info: {
    fontSize: DEVICE_HEIGHT * 0.025,
    color: "#000",
  },
  profile: {
    justifyContent: "flex-start",
    borderRadius: 40,
    width: 70,
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 70, height: 70 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
