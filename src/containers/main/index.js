import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import PurchaseTabStackNavigation from './purchase-tabstacknavigator';
import WalletTabStackNavigation from './wallet-tabstacknavigator';
import PaymentsTabStackNavigation from './payments-tabstacknavgator';
import ProfileTabStackNavigation from './profile-tabstacknavigator';

import SecretCodeScreen from '../../screens/secret-code/secret-code-screen';

const MainTabContainers = TabNavigator({
  PurchaseTab: {
    screen: PurchaseTabStackNavigation
  },
  WalletTab: {
    screen: WalletTabStackNavigation
  },
  PaymentsTab: {
    screen: PaymentsTabStackNavigation
  },
  ProfileTab: {
    screen: ProfileTabStackNavigation
  }
}, {
    initialRouteName: 'PurchaseTab',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#0084ec',
        shadowOpacity: 0.4
      },
      pressOpacity: 2,
      animationEnabled: true
    }
  })

export default StackNavigator({
  MainTabContainers,
  SecretCodeScreen
}, {
    initialRouteName: 'MainTabContainers',
    mode: 'modal',
    headerMode: 'none',
  });