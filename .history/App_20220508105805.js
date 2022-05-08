import React from 'react';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, LogBox, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './Screens/Home';
import Userapp from "./Screens/Userapp"
import Forgetpaswword from './Screens/Forgetpaswword';
import Menu from './Screens/Menu';
import Order from './Screens/Order';
import BottomTabs from './Components/Bottomtab';
import { HStack, NativeBaseProvider } from 'native-base';
import SuperMarket from './Screens/SuperMarket';
import { Bellicon, Shoppingcart } from './Components/Icons';
import Grocery from './Screens/Grocery';
import Fruits from './Screens/Fruits';
import FruitCart from './Screens/FruitCart';
import Restaurants from './Screens/Restaurants';
import Foods from './Screens/Food';
import RestaurantCart from './Screens/RestaurantCart';


const Stack = createStackNavigator();
const AppStack = createStackNavigator();
// LogBox.ignoreAllLogs();


const fetchFonts = () => {
  return Font.loadAsync({
    'arabicRegular': require('./fonts/arabicRegular.ttf'),
    'arabicLight': require('./fonts/arabicLight.ttf'),
    'arabicBold': require('./fonts/arabicBold.ttf'),
    'robotoRegular': require('./fonts/robotoRegular.ttf')


  })
}

const Tabnav = ({ route, navigation }) => {


  return (
    <View style={styles.conatainer}>

      <BottomTabs navigation={navigation} />
    </View>



  )
}



const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  return (
    <NativeBaseProvider>
      <PaperProvider>


        <NavigationContainer>
          <Stack.Navigator initialRouteName='Userapp' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Userapp" component={Userapp} />
            <Stack.Screen name="Forgetpaswword" component={Forgetpaswword} />
            <Stack.Screen name="Dashboard" component={Tabnav} />
            <Stack.Screen options={{ headerShown: true, title: "My Cart" }} name="fruitCart" component={FruitCart} />
            <Stack.Screen name="restaurantCart" component={RestaurantCart} options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#00CBA4',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'The selected items',
              headerRight: () => (
                <View style={{ marginRight: 20 }}>
                  <Text style={{ color: '#fff' }}>Cancel</Text>
                </View>
              ),

            }} />

            <Stack.Screen name="supermarket" component={SuperMarket} options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#00CBA4',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Supermarket',
              headerRight: () => (
                <View style={{ marginRight: 20 }}>
                  <HStack>
                    <Shoppingcart color="#fff" />
                    <ImageBackground
                      source={require("./Images/circle.png")}
                      style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}

                    >
                      <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                        3
                      </Text>

                    </ImageBackground>
                  </HStack>
                </View>
              ),

            }} />

            <Stack.Screen name="grocery" component={Grocery} options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#00CBA4',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Supermarket Name',
              headerRight: () => (
                <View style={{ marginRight: 20 }}>
                  <HStack>
                    <Shoppingcart color="#fff" />
                    <ImageBackground
                      source={require("./Images/circle.png")}
                      style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}

                    >
                      <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                        3
                      </Text>

                    </ImageBackground>
                  </HStack>
                </View>
              ),

            }} />

            <Stack.Screen name="fruits" component={Fruits} options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#00CBA4',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Supermarket Name',
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <HStack>
                    <Shoppingcart color="#fff" />
                    <ImageBackground
                      source={require("./Images/circle.png")}
                      style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}

                    >
                      <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                        3
                      </Text>

                    </ImageBackground>
                  </HStack>
                </TouchableOpacity>
              ),

            }} />


            <Stack.Screen name="restaurants" component={Restaurants} options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF9D52',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Restaurants',
              headerRight: () => (
                <View style={{ marginRight: 20 }}>
                  <HStack>
                    <Shoppingcart color="#fff" />
                    <ImageBackground
                      source={require("./Images/circle.png")}
                      style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}

                    >
                      <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                        3
                      </Text>

                    </ImageBackground>
                  </HStack>
                </View>
              ),

            }} />


            <Stack.Screen name="food" component={Foods} options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FF9D52',
                borderBottomWidth: 0,
                shadowColor: "#F6F6F6",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 0,
              },
              headerTintColor: "#fff",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'arabicRegular', fontSize: 24,
              },
              title: 'Restaurants Name',
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <HStack>
                    <Shoppingcart color="#fff" />
                    <ImageBackground
                      source={require("./Images/circle.png")}
                      style={{ width: 15.85, height: 15.85, marginLeft: '-15%' }}

                    >
                      <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                        3
                      </Text>

                    </ImageBackground>
                  </HStack>
                </TouchableOpacity>
              ),

            }} />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </NativeBaseProvider>
  );
}
export default App;
const styles = StyleSheet.create({

  conatainer: {
    flex: 1,
    justifyContent: "center",


  },








});