import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './homeScreen';
import OtherScreen from './otherScreen';
import SignInScreen from './signInScreen';
import TextInput from '../TextInput';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ 
    SignIn: TextInput, 
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Other: {
      screen: OtherScreen,
    },
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MyDrawerNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
