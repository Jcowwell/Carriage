import {createBottomTabNavigator} from 'react-navigation-tabs';

import {HomeScreen, CouponScreen, CategoryScreen, SearchScreen, SettingScreen} from '../scenes/index'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home:{
    screen:HomeScreen,
  },
  Coupons:{
    screen:CouponScreen,
  },
  Categories:{
    screen:CategoryScreen,
  },
  Search:{
    screen:SearchScreen,
  },
  Settings:{
    screen:SettingScreen,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;