import { Link } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Home() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Pagina User With ID: {id}</Text>
      <Link href="/">Voltar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e25555",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
