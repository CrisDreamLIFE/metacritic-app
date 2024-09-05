import { View, Text } from "react-native-web";

export function Status({ status }) {
  return (
    <View className="bg-yellow-500 text-white w-8 h-8 rounded-full justify-center items-center">
      <Text className="text-lg font-bold text-white">status: {status}</Text>
    </View>
  );
}
