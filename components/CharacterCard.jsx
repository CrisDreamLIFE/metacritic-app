import { useEffect, useRef } from "react";
import { StyleSheet, Image, Text, View, Animated } from "react-native";

export function CharacterCard({ character }) {
  return (
    <View key={character.name} style={styles.card}>
      <Text style={styles.title}>{character.name}</Text>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.info}>{character.species}</Text>
      <Text style={styles.info}>{character.gender}</Text>
      <Text style={styles.info}>{character.origin.name}</Text>
      <Text style={styles.info}>{character.location.name}</Text>
      <Text style={styles.info}>{character.status}</Text>
    </View>
  );
}

export function AnimatedCharacterCard({ character, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View styles={{ opacity }}>
      <CharacterCard character={character} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {},
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  info: {
    fontSize: 10,
    color: "#fff",
    marginTop: 10,
  },
});
