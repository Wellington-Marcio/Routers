import { Link, router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Pagina Painel</Text>
      <Button title="Sair" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e08e8",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
