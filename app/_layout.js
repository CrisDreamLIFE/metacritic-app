import { Link, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native-web";
import { Logo } from "../components/Logo";
import { Pressable } from "react-native";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View
      style={styles.container}
      // className="flex-1 items-center justify-center bg-black"
    >
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => (<Text style={{ color: "white" }}>App Rick And Morty</Text>),
          headerRight: () => (
            <Link href="/about" className="text-violet-800">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
