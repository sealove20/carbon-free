import {Detail} from '@features/home/screens/detail/detail';
import {Home} from '@features/home/screens/home/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type FundDetailStackParamList = {
  Dashboard: undefined;
  Detail: {title: string; abvTitle: string; value: string; percentage: string};
};

const Stack = createNativeStackNavigator<FundDetailStackParamList>();

export function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
