import { Text, View } from "react-native";
import {Link} from 'expo-router'
// import 'expo-router/entry';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      <Text className="font-bold text-lg my-10">Welcome my friend</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="./properties/1">Property</Link>
    </View>
  );
}
