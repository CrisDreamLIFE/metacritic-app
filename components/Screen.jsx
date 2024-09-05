import { View } from "react-native";

export function Screen({ children }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {children}
    </View>
  );
}
