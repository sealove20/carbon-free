import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Entypo} from '@expo/vector-icons';
import {Trade} from '@features/home/screens/trade/trade';
import {Portifolio} from '@features/home/screens/portifolio/portifolio';
import {HomeStack} from './home-stack';

const Tab = createBottomTabNavigator();

export function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          // let iconName;

          // if (route.name === 'Home') {
          //   iconName = focused
          //     ? 'ios-information-circle'
          //     : 'ios-information-circle-outline';
          // } else if (route.name === 'Settings') {
          //   iconName = focused ? 'ios-list' : 'ios-list-outline';
          // }

          // You can return any component that you like here!
          return <Entypo name="home" size={24} color="black" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Portifolio" component={Portifolio} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
