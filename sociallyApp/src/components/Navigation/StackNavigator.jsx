import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import Login from '../../screens/Login';
import Navbar from './Navbar';
import SearchScreen from '../../screens/SearchScreen';
import UserProfileScreen from '../../screens/UserProfileScreen';

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
      <Stack.Screen
        name="Search"
        options={{headerShown: false}}
        component={SearchScreen}
        
      />
      <Stack.Screen
        name="UserProfile"
        options={{headerShown: false}}
        component={UserProfileScreen}

      />
      
      
      
    </Stack.Navigator>
  );
}
export default MyStack;