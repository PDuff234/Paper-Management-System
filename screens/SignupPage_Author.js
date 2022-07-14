import React, { useEffect, useCallback, Fragment } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native"; 

const SignupPageAuthor = () => {
  const navigation = useNavigation(); 
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    console.log(formData);
    
    fetch('http://localhost:5000/register/authors', {
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
        console.log("Response is 200")
        alert("User successfully created"); 
        navigation.navigate('Author Login');
        return response.json(); 
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
    register('midinit'); 
    register('lname'); 
    register('affiliation'); 
    register('department'); 
    register('phonenumber'); 
    register('email'); 
    register('username'); 
    register('password');
  }, [register]);

  return (
    <View style = { styles.container }>
      <ScrollView contentContainerStyle = {{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginHorizontal: 40 }}>
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
              placeholder = "Middle Initial"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('midinit')}
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
              placeholder = "Affiliation"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('affiliation')}
          />
        </View>

        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Department"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('department')}
          />
        </View>

        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Phone Number"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('phonenumber')}
          />
        </View>

        <View style = {styles.inputView}>
          <TextInput 
              style = {styles.inputText}
              placeholder = "Email"
              placeholderTextColor = "#003f5c"
              onChangeText = {onChangeField('email')}
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

      </ScrollView>
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

export default SignupPageAuthor;