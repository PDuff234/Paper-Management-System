import React, { useEffect, useCallback, Component } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native"; 

const PreReview = () => {
  const navigation = useNavigation(); 

  return (
    <View style = { styles.container }>
      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 100, marginBottom: 80, fontFamily: 'Garamond'}}>
        Please choose what paper you would like to Review
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity style = {styles.loginBtn} onPress = {() => navigation.navigate('Paper Review 1')}>
            <Text style = {styles.loginText}> Paper 1 </Text>
        </TouchableOpacity>

        <View style = {styles.space} />

        <TouchableOpacity style = {styles.loginBtn} onPress = {() => navigation.navigate('Paper Review 2')}>
            <Text style = {styles.loginText}> Paper 2 </Text>
        </TouchableOpacity>

        <View style = {styles.space} />

        <TouchableOpacity style = {styles.loginBtn} onPress = {() => navigation.navigate('Paper Review 3')}>
            <Text style = {styles.loginText}> Paper 3 </Text>
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
    width: "40%",
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
  }, 

  space: {
    width: 40, 
  }, 
});

export default PreReview;