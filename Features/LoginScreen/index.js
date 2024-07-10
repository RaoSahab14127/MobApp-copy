
  // LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../api/AuthReducer';
import { unwrapResult } from "@reduxjs/toolkit";
import Loader from '../../components/Loader';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('dev_siliconplex');
  const [password, setPassword] = useState('dev_siliconplex');
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.AuthReducer);
  const handleLogin = () => {
    dispatch(Login({body: {
      username : username,
      password: password,
      is_social: false,
    }}))
    .then(unwrapResult)
      .then((res) => {
        console.log("Login Response ===", res.data);

      })
      .catch((err) => {
        console.log("Login Error Reponse ===", err);
      });
  };

  return (
    <>
    { loading === 'pending' ? <Loader/> :
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={()=>handleLogin()} />
    </View>}</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
