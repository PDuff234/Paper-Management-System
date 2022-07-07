import * as React from 'react'; 
import * as Font from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

import LoginPage from './screens/LoginPage';
import AdminPage from './screens/AdminPage';
import AuthorPage from './screens/AuthorPage';
import ReviewerPage from './screens/ReviewerPage';
import SignupPage from './screens/SignupPage';
import TestReviewer from './screens/TestReviewerPage';


function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <StatusBar style="auto" />          
      <Image style = {{flex: 1, width: 400, height: 200, resizeMode: 'contain'}} source = {{uri: 'https://www.pngitem.com/pimgs/m/276-2761991_university-of-south-florida-transparent-university-of-south.png'}} />
      <Text style = {{ color: '#CFC493', fontSize: 32, marginTop: 20, fontFamily: 'Garamond'}}>
        Conference Paper Management System
      </Text>
      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 6, marginBottom: 40, fontFamily: 'Garamond'}}>
        Patrick Duffany, Jeremy Rutter, Dawson Murphy
      </Text>     
        <Button
          title="Login Page"
          onPress={() => navigation.navigate('Login Page')}
        />
    </View>
  );
}

function LogPage() {
  return (
    <View style = {styles.container}>
      <LoginPage />
    </View>
  ); 
}

function AdmPage() {
  return (
    <View style = {styles.container}>
      <AdminPage />
    </View>
  ); 
}

function AuthPage() {
  return (
    <View style = {styles.container}>
      <AuthorPage />
    </View>
  ); 
}

function RevPage() {
  return (
    <View style = {styles.container}>
      <ReviewerPage />
    </View>
  ); 
}

function SupPage() {
  return (
    <View style = {styles.container}>
      <SignupPage />
    </View>
  ); 
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login Page" component={LogPage} />
        <Stack.Screen name="Admin Page" component={AdmPage} />
        <Stack.Screen name="Author Page" component={AuthPage} />
        <Stack.Screen name="Reviewer Page" component={RevPage} />
        <Stack.Screen name="Sign Up Page" component={SupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006747',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    flexDirection: "row", 
    justifyContent: "space-evenly", 
    backgroundColor: 'green', 
  }, 
});

export default App; 