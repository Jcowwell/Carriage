import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Image} from "react-native";
import {Colors} from '../styles'

import {HomeScreen, CouponScreen, CategoryScreen, SearchScreen, SettingScreen} from '../scenes'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    showLabel: false,
    style: {
     height: 66,
     backgroundColor: Colors.PRIMARY
    }
  }
};

const RouteConfigs = {
  Home:{
    screen:HomeScreen,
    navigationOptions:{    
      tabBarIcon:({ focused })=> {
        const image = focused
        ? require('../assets/images/TabIcons/Main_Menu_Active.png')
        : require('../assets/images/TabIcons/Main_Menu_Inactive.png')
        return (
            <Image
                source={image}
                style={{height:35, width:35}}
            />
        )
      }  
    }
  },

  Coupons:{
    screen:CouponScreen,
    navigationOptions:{    
      tabBarIcon:({ focused })=> {
        const image = focused
        ? require('../assets/images/TabIcons/Coupons_Active.png')
        : require('../assets/images/TabIcons/Coupons_Inactive.png')
        return (
            <Image
                source={image}
                style={{height:35, width:35}}
            />
        )
      }  
    }
  },
  Categories:{
    screen:CategoryScreen,
    navigationOptions:{    
      tabBarIcon:({ focused })=> {
        const image = focused
        ? require('../assets/images/TabIcons/Categories_Active.png')
        : require('../assets/images/TabIcons/Categories_Inactive.png')
        return (
            <Image
                source={image}
                style={{height:35, width:35}}
            />
        )
      }  
    }
  },
  Search:{
    screen:SearchScreen,
    navigationOptions:{    
      tabBarIcon:({ focused })=> {
        const image = focused
        ? require('../assets/images/TabIcons/Search_Active.png')
        : require('../assets/images/TabIcons/Search_Inactive.png')
        return (
            <Image
                source={image}
                style={{height:35, width:35}}
            />
        )
      }  
    }
  },
  Settings:{
    screen:SettingScreen,
    navigationOptions:{    
      tabBarIcon:({ focused })=> {
        const image = focused
        ? require('../assets/images/TabIcons/Settings_Active.png')
        : require('../assets/images/TabIcons/Settings_Inactive.png')
        return (
            <Image
                source={image}
                style={{height:35, width:35}}
            />
        )
      }  
    }
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;