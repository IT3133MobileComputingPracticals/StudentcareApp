import * as React from 'react';
import { PaperProvider, Appbar, Text, TextInput, Button } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
    const uovLogoImage = require('../assets/uovLogo.jpeg');
    const loginfunction = () => console.log("Logged in")

    return (
        <>
            <PaperProvider>
                <SafeAreaView style={styles.safeArea}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={styles.container}>
                            <ScrollView>
                                {/* Header */}
                                <Appbar.Header style={styles.header}>
                                    <Appbar.Content color="white" title="UOV Student Care" />
                                </Appbar.Header>

                                {/* Image */}
                                <View style={styles.imageContainer}>
                                    <Image source={uovLogoImage} style={styles.image} />
                                </View>

                                <View style={styles.form}>
                                    <TextInput style={styles.textInput} label="Username" ></TextInput>
                                    <TextInput style={styles.textInput} label="Password" ></TextInput>
                                    <Button mode="contained" onPress={loginfunction}>Login</Button>
                                </View>

                            </ScrollView>

                        </View>
                    </KeyboardAvoidingView>


                </SafeAreaView>
            </PaperProvider>
        </>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: 'purple',
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: '80%',
        height: 80,
        resizeMode: 'contain',
    },
    form: {
        padding: 20, // Minimal padding around the form
        margin: 20, // Space around the form
    },
    textInput: {
        marginBottom: 10, // Space between inputs
        borderBottomWidth: 1, // Simple underline for inputs
        borderBottomColor: '#ccc', // Light underline color
        fontSize: 16, // Clean and readable font size
        paddingVertical: 5, // Minimal vertical padding
    },

});