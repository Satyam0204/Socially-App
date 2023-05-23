import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import Login from '../../screens/Login';
import Navbar from './Navbar';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 

      initialRouteName="login"
      screenOptions={{

        headerShown: false ,
        
      }}
    >
        <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={Login}
        />
      <Stack.Screen
        name="Navbar"
        options={{headerShown: false}}
        component={Navbar}
        
      />
      
      
      
    </Stack.Navigator>
  );
}
export default MyStack;