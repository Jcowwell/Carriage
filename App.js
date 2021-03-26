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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {HomeScreen} from './src/scenes/home/home'

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

const Topbar = (): Node => {
  return (
      <View style={styles.topbarContainer}>
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

const App: () => Node = () => {

  const backgroundStyle = {
    backgroundColor: 'white',
  };
  return (
    <NavigationContainer>
      <View style={backgroundStyle}>
        {/* Status Bar */}
        <MyStatusBar backgroundColor="#32965D" barStyle="dark-content" />
        {/* Topbar */}
        <Topbar></Topbar>
        {/* Home Page */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
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

  contentContainer: {
    height: 5.555 * (deviceHeight/8),
    width: deviceWidth,
  },
  
  tabbarContainer: {
    height: deviceHeight/8,
    width: deviceWidth,
    backgroundColor: '#32965D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'white',
  },
});

export default App;
