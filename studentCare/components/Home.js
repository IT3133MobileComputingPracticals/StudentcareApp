import * as React from 'react'
import { PaperProvider, Appbar } from 'react-native-paper'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';


export default function Home() {
    const uovLogoImage = require('../assets/uovLogo.jpeg');
    const goBack = () => console.log("Went back")
    return (
        <>
            <PaperProvider>
                <ScrollView>
                    <SafeAreaView>

                        <View style={styles.container}>

                            <View style={styles.headerContainer}>
                                <Appbar.Header style={styles.header}>
                                    <Appbar.BackAction color="white" onPress={goBack} />
                                    <Appbar.Content color="white" title="UOV Student Care" />
                                </Appbar.Header>
                                <View style={styles.imageContainer}>
                                    <Image source={uovLogoImage} style={styles.image} />
                                </View>
                            </View>

                            <View>
                                
                            </View>

                            <View style={styles.footer}>
                                <Text style={styles.footerText}>Uov@2024</Text>
                            </View>

                        </View>
                    </SafeAreaView>
                </ScrollView>

            </PaperProvider>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'purple'
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "80%",
        height: 80,
        margin: '20'
    },
    footer: {
        backgroundColor: 'purple',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'white'
    }
})