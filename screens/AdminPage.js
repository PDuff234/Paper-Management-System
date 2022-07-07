import React, { useEffect, useCallback, Component } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native"; 

const AdminPage = () => {
  const navigation = useNavigation(); 

  return (
    <View style = { styles.container }>
      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 100, marginBottom: 80, fontFamily: 'Garamond'}}>
        Choose what table you would like to go into
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity style = {styles.loginBtn} onPress = {() => navigation.navigate('Author Page')}>
            <Text style = {styles.loginText}> Author Table </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.loginBtn} onPress = {() => navigation.navigate('Reviewer Page')}>
            <Text style = {styles.loginText}> Reviewer Table </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006747",
    justifyContent: "center",
    //alignContent: 'center', 
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#3EB489",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  inputText: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 25,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'white', 
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#CFC493",
  },

  loginText: {
      color: "white", 
      fontSize: 16
  }
});

export default AdminPage;