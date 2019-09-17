import TodayScreen from './screens/TodayScreen';
import About from './screens/About';
import Archive from './screens/ArchivedScreen';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
    Home: {
      screen: TodayScreen,
    },
    Archive: {
      screen: Archive,
    },
  }, {
    initialRouteName: 'Home',
  });
  
  const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeStack
    },
    Archive: {
      screen: Archive,
    },
  }, {
    initialRouteName: 'Home',
  });
  
  const AppContainer = createAppContainer(TabNavigator);
  
  export default AppContainer;
