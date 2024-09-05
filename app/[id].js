import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [characterInfo, setCharacterInfo] = useState(null);

  const getCharacterInfo = async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      const json = await response.json();
      setCharacterInfo(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (id) {
      getCharacterInfo(id);
    }
  }, [id]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: `Personaje ${id}`,
          headerRight: () => {},
        }}
      />
      <View
        style={styles.container}
        //className="flex 1 justify-center items-center"
      >
        <Text
          style={styles.detail}
          // className="text-white font-bold mb-8 text-2xl"
        >
          Detalle del juego del {id}
        </Text>
        <Text
          style={styles.detail}
          // className="text-white font-bold mb-8 text-2xl"
        >
          {characterInfo ? characterInfo.episode[0] : ""}
        </Text>
        <Link style={styles.goBack} href="/" className="text-blue-500">
          Volver Atrás
        </Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  goBack: {
    color: "#3b82f6",
  },
  detail: {
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: "32px",
    fontSize: "24px",
    lineHeight: "32px",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
