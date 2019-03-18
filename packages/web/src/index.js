import { AppRegistry } from 'react-native'; // auto-aliased to react-native-web
import App from './App';

AppRegistry.registerComponent('teamZone', () => App);
AppRegistry.runApplication('teamZone', {
  rootTag: document.getElementById('root'),
});
