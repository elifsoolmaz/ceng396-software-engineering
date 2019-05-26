import React from "react";
import { View, StatusBar } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  TabNavigator
} from "react-navigation";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import Header from "./src/components/Header";
import DoneScreen from "./src/screens/DoneScreen";
import DoingScreen from "./src/screens/DoingScreen";
import BottomBar from "./src/components/BottomBar/BottomBar";
import ToDoScreen from "./src/screens/ToDoScreen";
import InProgressScreen from "./src/screens/InProgressScreen";
import CompletedScreen from "./src/screens/CompletedScreen";
import CreateTask from "./src/screens/CreateTask";
import CreateProject from "./src/screens/CreateProject";
import TaskScreens from "./src/screens/TaskScreens";
import { MenuProvider } from "react-native-popup-menu";

const TabNavigation = createBottomTabNavigator(
  {
    Completed: CompletedScreen,
    ToDo: ToDoScreen,
    InProgress: InProgressScreen,
    CreateProject: CreateProject,
    Discover: DiscoverScreen,
    Done: DoneScreen,
    Doing: DoingScreen
  },
  {
    tabBarComponent: (navigation, props) => <BottomBar {...props} />
  }
);
const HomeNavigator = createStackNavigator(
  {
    Tab: TabNavigation
  },
  {
    headerMode: "none",
    navigationOptions: {
      title: "  ",
      header: (navigation, props) => <Header {...props} {...navigation} />
    }
  }
);

const WelcomeNavigator = createStackNavigator({
  Home: HomeNavigator,
  Login: LoginScreen,
  Signup: SignupScreen
});

const AppContainer = createAppContainer(WelcomeNavigator);
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
<<<<<<< HEAD
        <AppContainer />
=======
<<<<<<< HEAD
        <MenuProvider>
          <AppContainer />
        </MenuProvider>
=======
        <AppContainer  />
>>>>>>> 7780306e17668ae985e007e56b28ceb21f05f045
>>>>>>> 3bd5f6b626f050b9f2693910059ebe697b6ff3bc
      </View>
    );
  }
}
