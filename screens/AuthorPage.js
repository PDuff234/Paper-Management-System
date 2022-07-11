import React, { useEffect, useCallback, Fragment } from 'react';
import { View, Button, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native"; 

const AuthorPage = () => {
  const navigation = useNavigation(); 

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

  });

export default AuthorPage;