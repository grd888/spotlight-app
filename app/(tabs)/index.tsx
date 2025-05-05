import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.containers}>
      <Link href="/notifications">Visit notifications screen </Link>
    </View>
  );
}
