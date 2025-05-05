import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.containers}>

      <Link href="/profile">Profile</Link>
      <Link href="/notifications">Notifications</Link>
      
      <Text style={styles.title}>Hello 123 with style</Text>

      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1737067304108-472b135f00e6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />

      <TouchableOpacity onPress={() => alert("opacity")}>
        <Text>Press me - opacity</Text>
      </TouchableOpacity>

      <Pressable onPress={() => alert("pressable")}>
        <Text>Press me - pressable</Text>
      </Pressable>
    </View>
  );
}
