import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Painel",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" size={size} color={color} />;
            }
            return <FontAwesome name="tag" size={size} color="#ccc" />;
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="gears" size={size} color={color} />;
            }
            return <FontAwesome name="gear" size={size} color="#ccc" />;
          },
        }}
      />
    </Tabs>
  );
}
