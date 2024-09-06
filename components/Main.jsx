import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedCharacterCard } from "./CharacterCard";
// import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  const getCharactersFromApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setCharacters(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getLatestGames().then((games) => {
    //   setGames(games);
    // });
    getCharactersFromApi();
  }, []);

  const char = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  const { height: windowHeight } = useWindowDimensions();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Text>LOGO</Text>
        {/* <Logo /> */}
      </View>
      {characters.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={characters}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard character={item} index={index} />
          )}
          style={{ height: windowHeight }}
          keyExtractor={(item) => item.id}
          onScroll={(event) => {
            console.log("scroll");
          }}
        />
      )}
    </Screen>
  );
}
