import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu'; 
//@BlueprintImportInsertion
import BlankScreen513368Navigator from '../features/BlankScreen513368/navigator';
import BlankScreen213361Navigator from '../features/BlankScreen213361/navigator';
import {demo}  from '../features/BlankScreen213361/screens/constants';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen513368: { screen: BlankScreen513368Navigator },
BlankScreen213361: { screen: BlankScreen213361Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
