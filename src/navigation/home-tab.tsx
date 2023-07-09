import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather, Fontisto} from '@expo/vector-icons';
import {Trade} from '@features/home/screens/trade/trade';
import {Portifolio} from '@features/home/screens/portifolio/portifolio';
import {HomeStack} from './home-stack';
import {light} from '@themes/light';

const Tab = createBottomTabNavigator();

export function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let focusColor;

          if (route.name === 'Home') {
            iconName = 'home';
            focusColor = focused ? light.colors.primary : 'black';
          } else if (route.name === 'Trade') {
            focusColor = focused ? light.colors.primary : 'black';
            return <Fontisto name="arrow-swap" size={24} color={focusColor} />;
          } else if (route.name === 'Portifolio') {
            iconName = 'pie-chart';
            focusColor = focused ? light.colors.primary : 'black';
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={24} color={focusColor} />;
        },
        tabBarActiveTintColor: light.colors.primary,
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Portifolio" component={Portifolio} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}
