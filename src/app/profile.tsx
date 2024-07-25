import { Link } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Pagina Perfil</Text>
      <Link href={"/"}>Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1d713",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
