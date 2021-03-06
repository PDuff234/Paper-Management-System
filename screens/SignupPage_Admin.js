import React, { useEffect, useCallback, Fragment, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native"; 

const SignupPageAdmin = () => {
  const navigation = useNavigation(); 

  const createAlert = () => 
    Alert.alert(
      "Notice",
      "Admin User has been Successfully registered",
      [
        {
          text: "Sweet!",
          onPress: () => navigation.navigate('Admin Login'),
          style: "default"
        },
      ],
      { cancelable: false }
    );  

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    console.log(formData);
    
    fetch('http://localhost:5000/register/admin', {
      method: 'POST', 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(formData)
    })
    .then(response => {
      console.log("response: " + response);
      if (response.status === 200) {
        console.log("Response is 200"); 
        alert("User successfully created"); 
        navigation.navigate('Admin Login');
        return response.json(); 
      }
      else {
        alert("User did not Successfully Register")
      }
    })
    
  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register('fname'); 
    register('lname'); 
    register('username'); 
    register('password');
  }, [register]);

  return (
    <View style = { styles.container }>
        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "First Name"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('fname')}
          />
        </View>

        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Last Name"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('lname')}
          />
        </View>

        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Username"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('username')}
          />
        </View>

        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Password"
              placeholderTextColor = "#003f5c"
              secureTextEntry = {true}
              onChangeText = {onChangeField('password')}
          />
        </View>
        <TouchableOpacity style = {styles.loginBtn} onPress = {handleSubmit(onSubmit)}>
            <Text style = {styles.loginText}> Sign Up </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#006747",
      alignItems: "center",
      justifyContent: "center",
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

export default SignupPageAdmin;