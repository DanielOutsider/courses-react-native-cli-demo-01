import React from "react";
import { View, Text, TextInput, Image, Button, StyleSheet } from "react-native";

const LoginScreen = () => {

    const handleSignInPress = () => {

    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://www.nintenderos.com/wp-content/uploads/2022/11/super-mario-dedo-e1668093509632.jpg' }} style={style.image} />
            </View>
            <View style={styles.inputsContainer}>
                <TextInput placeholder="user" style={styles.textInput}/>
                <TextInput placeholder="password" style={styles.textInput} secureTextEntry/>
            </View>
            <Button style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    image:  {
        width: 70,
        height: 70,
        alignSelf: "center"
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    textInput: {
        backgroundColor: "#fff",
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16
    },
    button: {

    }
});

export default LoginScreen;