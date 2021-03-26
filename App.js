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
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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

const state = {
  homePageDisplay: 'block',
  couponPageDisplay: 'none',
  categoryPageDisplay: 'none',
  searchPageDisplay: 'none',
  settingPageDisplay: 'none',
}

const handleHomePagePress = () => this.setState(state => ({
  homePageDisplay: 'block',
  couponPageDisplay: 'none',
  categoryPageDisplay: 'none',
  searchPageDisplay: 'none',
  settingPageDisplay: 'none',
}));

const handleCouponPagePress = () => this.setState(state => ({
  homePageDisplay: 'none',
  couponPageDisplay: 'block',
  categoryPageDisplay: 'none',
  searchPageDisplay: 'none',
  settingPageDisplay: 'none',
}));

const handleCategoryPagePress = () => this.setState(state => ({
  homePageDisplay: 'none',
  couponPageDisplay: 'none',
  categoryPageDisplay: 'block',
  searchPageDisplay: 'none',
  settingPageDisplay: 'none',
}));

const handleSearchPagePress = () => this.setState(state => ({
  homePageDisplay: 'none',
  couponPageDisplay: 'none',
  categoryPageDisplay: 'none',
  searchPageDisplay: 'block',
  settingPageDisplay: 'none',
}));

const handleSettingPagePress = () => this.setState(state => ({
  homePageDisplay: 'none',
  couponPageDisplay: 'none',
  categoryPageDisplay: 'none',
  searchPageDisplay: 'none',
  settingPageDisplay: 'block',
}));

const Topbar = (): Node => {
  return (
      <View style={styles.topbarContainer}>
      </View>
  );
};

const Tabbar = (): Node => {
  return (
    <View style={styles.tabbarContainer}>
      <TouchableHighlight style={styles.tabButton}
      onPress={handleHomePagePress}
      >
        {/* Home */}
        <Text>
          Home
        </Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.tabButton}
      >
        {/* Coupons */}
        <Text>
          Coupons
        </Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.tabButton}
      >
        {/* Categories */}
        <Text>
          Categories
        </Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.tabButton}
      >
        {/* Search */}
        <Text>
          Search
        </Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.tabButton}
      >
        {/* Settings */}
        <Text>
          Settings
        </Text>
      </TouchableHighlight>
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

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: 'white',
  };


  return (
    <View style={backgroundStyle}>
      {/* Status Bar */}
      <MyStatusBar backgroundColor="#32965D" barStyle="dark-content" />
      {/* Topbar */}
      <Topbar></Topbar>
      {/* Home Page */}
      <View style={{display: state.homePageDisplay}}>
        <HomeScreen/>
      </View>
      {/* Coupon Page */}
      <View style={{display: state.couponPageDisplay}}>
        <View style={styles.contentContainer} >
          <Text>Home</Text>
        </View>
      </View>
      {/* Category Page */}
      <View style={{display: state.categoryPageDisplay}}>
        <View style={styles.contentContainer} >
          <Text>Home</Text>
        </View>
      </View>
      {/* Search Page */}
      <View style={{display: state.searchPageDisplay}}>
        <View style={styles.contentContainer} >
          <Text>Home</Text>
        </View>
      </View>
      {/* Settings Page */}
      <View style={{display: state.settingPageDisplay}}>
        <View style={styles.contentContainer} >
          <Text>Home</Text>
        </View>
      </View>
      {/* Tabbar */}
      <Tabbar></Tabbar>
    </View>
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
