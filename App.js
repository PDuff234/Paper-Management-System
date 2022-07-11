import * as React from 'react'; 
import * as Font from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

import AdminPage from './screens/AdminPage';
import AuthorPage from './screens/AuthorPage';
import ReviewerPage from './screens/ReviewerPage';
import LoginPageAdmin from './screens/LoginPage_Admin';
import LoginPageReviewer from './screens/LoginPage_Reviewer';
import LoginPageAuthor from './screens/LoginPage_Author';
import SignupPageAuthor from './screens/SignupPage_Author';
import SignupPageReviewer from './screens/SignupPage_Reviewer';
import SignupPageAdmin from './screens/SignupPage_Admin'; 


function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <StatusBar style="auto" />          
      <Image style = {{flex: 1, width: 400, height: 200, resizeMode: 'contain'}} source = {{uri: 'https://seekvectorlogo.com/wp-content/uploads/2022/02/university-of-south-florida-usf-vector-logo-2022.png'}} />
      <Text style = {{ color: '#CFC493', fontSize: 32, marginTop: 20, fontFamily: 'Garamond'}}>
        Conference Paper Management System
      </Text>
      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 6, marginBottom: 40, fontFamily: 'Garamond'}}>
        Patrick Duffany, Jeremy Rutter, Dawson Murphy
      </Text>     
      <View style = {styles.button}>
        <Button
          title="Admin Login"
          onPress={() => navigation.navigate('Admin Login')}
        />
        <View style = {styles.space} />
        <Button
          title="Author Login"
          onPress={() => navigation.navigate('Author Login')}
        />
        <View style = {styles.space} />
        <Button
          title="Reviewer Login"
          onPress={() => navigation.navigate('Reviewer Login')}
        />
      </View>
    </View>
  );
}

function LogPage_Adm() {
  return (
    <View style = {styles.container}>
      <LoginPageAdmin />
    </View>
  ); 
}

function LogPage_Rev() {
  return (
    <View style = {styles.container}>
      <LoginPageReviewer />
    </View>
  ); 
}

function LogPage_Auth() {
  return (
    <View style = {styles.container}>
      <LoginPageAuthor />
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

function SupPage_Adm() {
  return (
    <View style = {styles.container}>
      <SignupPageAdmin />
    </View>
  ); 
}

function SupPage_Auth() {
  return (
    <View style = {styles.container}>
      <SignupPageAuthor />
    </View>
  ); 
}

function SupPage_Rev() {
  return (
    <View style = {styles.container}>
      <SignupPageReviewer />
    </View>
  ); 
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin Login" component={LogPage_Adm} />
        <Stack.Screen name="Reviewer Login" component={LogPage_Rev} />
        <Stack.Screen name="Author Login" component={LogPage_Auth} />
        <Stack.Screen name="Admin Page" component={AdmPage} />
        <Stack.Screen name="Author Page" component={AuthPage} />
        <Stack.Screen name="Reviewer Page" component={RevPage} />
        <Stack.Screen name="Admin Sign Up" component={SupPage_Adm} />
        <Stack.Screen name="Author Sign Up" component={SupPage_Auth} />
        <Stack.Screen name="Reviewer Sign Up" component={SupPage_Rev} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006747',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  button: {
    flexDirection: "row", 
    justifyContent: "space-between", 
  }, 

  space: {
    width: 20, 
  }, 
});

export default App; 