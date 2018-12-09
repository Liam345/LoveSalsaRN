//import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Challenges from "../screens/Challenges";
import ParentDisplayLocation from "../screens/ParentDisplayLocation";
import Home from "../screens/Home";
import Videos from "../screens/Videos";

const TabConfig = createBottomTabNavigator(
  {
    Challenges: {
      screen: Challenges,
      navigationOptions: {
        tabBarLabel: "Challenges"
      }
    },
    ParentDisplayLocation: {
      screen: ParentDisplayLocation,
      navigationOptions: {
        tabBarLabel: "DisplayLocation"
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Videos: {
      screen: Videos,
      navigationOptions: {
        tabBarLabel: "Videos"
      }
    }
  }
  //   ,
  //   {
  //     initialRouteName: "Challenges",
  //     activeColor: "#f0edf6",
  //     inactiveColor: "#3e2465",
  //     barStyle: { backgroundColor: "#694fad" }
  //   }
);

const TabStyleConfig = {
  tabBarOptions: {
    activeTintColor: "#fe0000"
  }
};

const HomeBottomStack = createAppContainer(TabConfig, TabStyleConfig);
export default HomeBottomStack;
