import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WalkthroughStack from './WalkthroughStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WalkthroughStack" component={WalkthroughStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}
