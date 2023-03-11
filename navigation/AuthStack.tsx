import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthMain from '../screens/Authentication/AuthMain';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={AuthMain} />
    </Stack.Navigator>
  );
}
