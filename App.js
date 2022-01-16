import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import PagerView from "react-native-pager-view";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to profile tabs"
        onPress={() => navigation.push("profile")}
      ></Button>
    </View>
  );
}

function ProfileScreen() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

// export default () => {
//   return (
//     <PagerView style={styles.pagerView} initialPage={0}>
//       <View key="1">
//         <Text>First page</Text>
//       </View>
//       <View key="2">
//         <Text>Second page</Text>
//       </View>
//     </PagerView>
//   );
// };
