import { StyleSheet, View, Text, Button } from "react-native";
import { Link, router } from "expo-router";

export default function Home() {
  function handleNavigation() {
    router.replace("/dashboard");
  }

  return (
    <View style={styles.container}>
      <Text>Pagina Home</Text>
      <Link href="/profile">Perfil</Link>
      <Link href="/user/Test">Usuário</Link>
      <Button title="Voltar para Home" onPress={handleNavigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08e9e9",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
