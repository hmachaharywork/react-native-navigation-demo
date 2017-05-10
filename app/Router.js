import { createRouter } from '@expo/ex-navigation';

import HomeScreen from './scenes/Home';
import Profile from './scenes/Profile';
import Notification from './scenes/Notification';
import About from './scenes/About';
import TabNav from './navigations/TabNav';

export default createRouter(() => ({
  home: () => TabNav,
  homeScreen: () => HomeScreen,
  profile: () => Profile,
  notification: () => Notification,
  about: () => About,
}));
