import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Profile from "./Profile";
import ImageUpload from "./ImageUpload";
import Settings from "./Settings";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Settings} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="ImageUpload" component={ImageUpload} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
