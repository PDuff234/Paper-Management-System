import React, { useEffect, useCallback, Fragment, useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native"; 
import * as DocumentPicker from 'expo-document-picker'; 

const AuthorPage = () => {
  const navigation = useNavigation(); 


  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({}); 
    console.log(JSON.stringify(result));       
    console.log(result.uri); 
    console.log('Type: ' + result.type); 
    console.log('File Name: ' + result.name); 
    console.log('File Size: ' + result.size); 
    console.log('MIME Type: ' + result.mimeType); 
    console.log('Output: ' + result.output); 

    //Store all data in local storage
    sessionStorage.setItem('FileName', result.name); 
    sessionStorage.setItem('FileURI', result.uri); 
  }
  
  const uploadDocument = async () => {

      var payload = {
        author: sessionStorage.getItem("user"), 
        title: sessionStorage.getItem("FileName"), 
        uri: sessionStorage.getItem("FileURI")  
      }

      console.log(JSON.stringify(payload)); 
      await fetch("http://localhost:5000/papers", {
        method: 'POST', 
        headers: { 
          Accept: "application/json", 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify(payload)
      }) 
      .then(res => {
        console.log("Response: " + res);
        if (res.status === 200)
        {
          alert("User has successfully submitted the paper"); 
          return res.json(); 
        }
      })
  }; 

  return (
    <View style = { styles.container }>
      <Text style = {{ color: '#CFC493', fontSize: 32, marginTop: 20, fontFamily: 'Garamond'}}>
        Author Page
      </Text>

      <Text style = {{ color: '#CFC493', fontSize: 20, marginTop: 100, marginBottom: 80, fontFamily: 'Garamond'}}>
        Please choose the paper you would like to submit to The Consortium for Computing Sciences in Colleges Midwest Region (CCSCMW) using one of the options below
      </Text>
      <View style = {styles.fixToText}>
        <Button
          title = "Add Paper"
          onPress={pickDocument}
        />
        <View style = {styles.space} />
        <Button 
          title = "Modify Paper"
        />
        <View style = {styles.space} />
        <Button
          title = "Delete Paper"
        />
      </View>

      <TouchableOpacity style = {styles.loginBtn} onPress = {uploadDocument}>
            <Text style = {styles.loginText}> Submit Paper </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#006747",
      textAlign: 'center', 
      alignItems: "center",
      alignContent: "center",
    },
   
    fixToText: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
    }, 

    space: {
      width: 20, 
    }, 

    loginBtn: {
      width: "20%",
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

export default AuthorPage;