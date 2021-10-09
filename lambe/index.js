/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import {name as appName} from './app.json';
import AddPhoto from './src/screens/AddPhoto';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Feed from './src/screens/Feed';
import storeConfig from './src/store';
import axios from 'axios';

axios.defaults.baseURL = 'https://lambe-8d638-default-rtdb.firebaseio.com/';
const store = storeConfig();

const Redux = () => (
    <Provider store={store}>
        <Register />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
