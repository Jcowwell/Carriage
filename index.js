/**
 * @format 
 */
// NOTE: - This project utilizes Atomic-Design

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src' 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
