import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../../screens/profile/profile-screen';

export default StackNavigator(
  {
    Profile: { screen: ProfileScreen }
  }, {
    initialRouteName: 'Profile',
    navigationOptions: {
      gesturesEnabled: false,
      showLabel: false,
      headerTintColor: '#ffff',
      headerTitle: 'Perfil',
      headerStyle: {
        backgroundColor: '#0084ec',
        borderBottomWidth: 0
      },
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account" size={28} color={tintColor} />
      ),
    }
  }
);