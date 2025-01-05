import * as React from 'react'
import { PaperProvider, Appbar, Text, BottomNavigation } from 'react-native-paper'
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function Home() {
    const uovLogoImage = require('../assets/uovLogo.jpeg');
    const goBack = () => console.log("Went back")

    return (
        <>
            <PaperProvider>

                <SafeAreaView>
                    <ScrollView>
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


                            <View style={styles.footer}>
                                <Text style={styles.footerText}>Uov@2024</Text>
                            </View>



                            <NavigationContainer>
                                <View>
                                    <Tab.Navigator
                                        screenOptions={{
                                            headerShown: false,
                                        }}
                                        tabBar={({ navigation, state, descriptors, insets }) => (
                                            <BottomNavigation.Bar
                                                navigationState={state}
                                                safeAreaInsets={insets}
                                                onTabPress={({ route, preventDefault }) => {
                                                    const event = navigation.emit({
                                                        type: 'tabPress',
                                                        target: route.key,
                                                        canPreventDefault: true,
                                                    });

                                                    if (event.defaultPrevented) {
                                                        preventDefault();
                                                    } else {
                                                        navigation.dispatch({
                                                            ...CommonActions.navigate(route.name, route.params),
                                                            target: state.key,
                                                        });
                                                    }
                                                }}
                                                renderIcon={({ route, focused, color }) => {
                                                    const { options } = descriptors[route.key];
                                                    if (options.tabBarIcon) {
                                                        return options.tabBarIcon({ focused, color, size: 24 });
                                                    }

                                                    return null;
                                                }}
                                                getLabelText={({ route }) => {
                                                    const { options } = descriptors[route.key];
                                                    const label =
                                                        options.tabBarLabel !== undefined
                                                            ? options.tabBarLabel
                                                            : options.title !== undefined
                                                                ? options.title
                                                                : route.title;

                                                    return label;
                                                }}
                                            />
                                        )}
                                    >
                                        <Tab.Screen
                                            name="Home"
                                            component={HomeScreen}
                                            options={{
                                                tabBarLabel: 'Home',
                                                tabBarIcon: ({ color, size }) => {
                                                    return <Icon name="home" size={size} color={color} />;
                                                },
                                            }}
                                        />
                                        <Tab.Screen
                                            name="Settings"
                                            component={SettingsScreen}
                                            options={{
                                                tabBarLabel: 'Settings',
                                                tabBarIcon: ({ color, size }) => {
                                                    return <Icon name="cog" size={size} color={color} />;
                                                },
                                            }}
                                        />
                                    </Tab.Navigator>
                                </View>
                            </NavigationContainer>

                        </View>
                    </ScrollView>
                </SafeAreaView>


            </PaperProvider>

        </>
    )
}

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
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