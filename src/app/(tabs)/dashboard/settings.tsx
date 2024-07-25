import { Link } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Pagina Settings</Text>
      <Link href={"/"}>Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1115f3",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
