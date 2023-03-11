import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Walkthrough, Welcome} from '../screens';

const Stack = createNativeStackNavigator();

export default function WalkthroughStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
    </Stack.Navigator>
  );
}
