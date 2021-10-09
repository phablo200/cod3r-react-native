/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Navegacao from './src/components/Navegacao';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navegacao);
