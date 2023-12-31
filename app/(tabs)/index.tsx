import {
  FlatList,
  FlatListProps,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import Card from "@/components/Card";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { user } from "@/mockData/user";
import { User } from "@/types";

export default function TabOneScreen() {
  

  type ItemProps = {
    user: User;
  };
  const Item = (props: ItemProps) => {
    const { image, name, bio } = props.user;
    return (
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        ></Image>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={user}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Card user={item} />
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      {/* <Card
        user={{
          name: "raghav",
          bio: "lol",
          image:
            "data:image/jpeg;base64,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",
        }}
      ></Card> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
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
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
    overflow: "hidden",

    justifyContent: "flex-end",
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
    color: "black",
    lineHeight: 25,
  },
});
