import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginSCreens from '../screens/LoginSCreens';
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen';

const AppStack = createStackNavigator({ Welcome: WelcomeScreen });
const AuthStack = createStackNavigator({ LogIn: LoginSCreens });

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default Navigation;