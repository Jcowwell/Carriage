/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {HomeScreen, CouponScreen, CategoryScreen, SearchScreen, SettingScreen} from './src/scenes/index'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const _handleButtonPress = () => {
  alert(
      'Button pressed!',
      'You did it!',
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      {/* Status Bar */}
      <MyStatusBar backgroundColor="#32965D" barStyle="dark-content" />
      {/* Navigation */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Coupons" component={CouponScreen} />
        <Tab.Screen name="Categories" component={CategoryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },

  topbarContainer: {
    height: deviceHeight/8,
    width: deviceWidth,
    backgroundColor: '#32965D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
});

export default App;
