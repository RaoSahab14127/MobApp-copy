import * as React from 'react';
import { Logout } from '../api/AuthReducer';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Payments from '../Features/Payments';
import TweetDetailScreen from '../Features/TweetDetailScreen';
import Settings from '../Features/Settings';
import Notifications from '../Features/Notifications';
import Feed from '../Features/Feed';
import {Pressable} from 'react-native';
import {Image} from 'react-native';
import DeclineLeave from '../components/DeclineLeave';
import LoginScreen from '../Features/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
// Tabs
const Tab = createBottomTabNavigator();

function TabsGroup({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerTitleAlign: "center",
        tabBarIcon: ({focused, color, size}) => {
          
          if (route.name === '@betomoedano') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'ios-settings-sharp';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-notifications' : 'notifications-outline';
          }
          // You can return any component that you like here!
          return <Text> hamamd</Text>;
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="@Hammad"
        component={TopTabsGroup}
        options={({ route }) => ({ 
          title: route.params.name ,
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../Assets/man2.jpeg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: '#1DA1F2',
        },
      }}>
      <TopTabs.Screen
        name="main"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
        }}
      />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="👀" component={DeclineLeave} />
    </TopTabs.Navigator>
  );
}
function CustomDrawerContent(props) {
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(Logout())
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => handleLogin()} />
    </DrawerContentScrollView>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          presentation: 'modal',
          headerTitle: 'Tweet Details',
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
}
function LoginAuthScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="TabsGroup"  options={{tabBarVisible: false}} component={LoginScreen} />
    </HomeStack.Navigator>
  );
}
// Drawar
const Drawer = createDrawerNavigator();
function DrawerGroup() {

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
      <Drawer.Screen name="Feed" component={HomeStackGroup} />
      <Drawer.Screen name="Payments" component={Payments} />
      <Drawer.Screen name="Payments1" component={Payments} />
      <Drawer.Screen name="Payments2" component={Payments} />

    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const { token } = useSelector((state) => state.AuthReducer);
  return (
    <NavigationContainer>
      {token? <DrawerGroup/> :<LoginAuthScreen />}
    </NavigationContainer>
  );
}
