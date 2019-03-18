/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // this is the magic 🎉
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
