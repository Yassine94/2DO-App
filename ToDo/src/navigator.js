import TodayScreen from './screens/TodayScreen';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
    Home: {
      screen: TodayScreen,
    },
  }, {
    initialRouteName: 'Home',
  });
  
  const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeStack
    },
  }, {
    initialRouteName: 'Home',
  });
  
  const AppContainer = createAppContainer(TabNavigator);
  
  export default AppContainer;
