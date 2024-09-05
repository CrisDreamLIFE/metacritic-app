import { useEffect, useRef } from "react";
import { StyleSheet, Image, Text, View, Animated, Pressable } from "react-native";
import { Status } from "./Status";
import { Link } from "expo-router";

export function CharacterCard({ character }) {
  return (
    <Link href={`/${character.id}`} asChild>
      <Pressable>
        <View
          style={styles.card}
          //className="flex-row bg-gray-500/10 p-4 rounded-xl gap-4 mb-10"
          key={character.name}
        >
          <Image source={{ uri: character.image }} style={styles.image} />
          <View>
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.info}>{character.species}</Text>
            <Text style={styles.info}>{character.gender}</Text>
            <Text style={styles.info}>{character.origin.name}</Text>
            <Text style={styles.info}>{character.location.name}</Text>
          </View>
          <Status status={character.status} />
        </View>
      </Pressable>
    </Link>
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
  card: {
    backgroundColor: "#6B7280",
    flexDirection: "row",
    margin: "20px",
    borderRadius: 10,
  },
  image: {
    objectFit: "cover",
    width: 107,
    height: 147,
    marginRight: 10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  info: {
    fontSize: 10,
    color: "#fff",
    marginTop: 5,
    // flexShrink: 1,
  },
});
