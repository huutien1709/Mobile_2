
import React, { useState } from "react";
import { View, Image, StyleSheet, Text, SafeAreaView, TextInput, Button, Alert } from "react-native";
import { Link } from 'expo-router';


const [titleText, setTitleText] = useState("Đăng ký");
const bodyText = "Tạo tài khoản cho bạn.";

const onPressTitle = () => {
  setTitleText("Bird's Nest [pressed]");
};
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://png.pngtree.com/png-clipart/20230813/original/pngtree-account-sign-business-web-vector-picture-image_10502730.png",
        }}
      />
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
      <SafeAreaView>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Tên tài khoản"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Tên đăng nhập"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Nhập email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Nhập mật khẩu"
        keyboardType="numeric"
        secureTextEntry
      />
       <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Nhập lại mật khẩu"
        keyboardType="numeric"
        secureTextEntry
      />
    </SafeAreaView>
    <Link href='./login'><Button title="Đăng ký" onPress={() => {}} /></Link>
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
  baseText: {
    fontFamily: "Cochin",
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textlink:
  {
      color: "black",
      margin: 50,
  }
});

export default TextInputExample;
