import * as React from 'react';
import { PaperProvider, Appbar, Text } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
    const uovLogoImage = require('../assets/uovLogo.jpeg');
    const goBack = () => console.log("Went back");

    // State to manage the active screen
    const [activeScreen, setActiveScreen] = React.useState('Profile');

    const renderScreen = () => {
        switch (activeScreen) {
            case 'Profile':
                return <ProfileScreen />;
            case 'Course':
                return <CourseScreen />;
            case 'Subjects':
                return <SubjectsScreen />;
            default:
                return <ProfileScreen />;
        }
    };

    return (
        <PaperProvider>
            <SafeAreaView style={styles.safeArea}>
                
                <View style={styles.container}>
                <ScrollView>
                    {/* Header */}
                    <Appbar.Header style={styles.header}>
                        <Appbar.BackAction color="white" onPress={goBack} />
                        <Appbar.Content color="white" title="UOV Student Care" />
                    </Appbar.Header>

                    {/* Image */}
                    <View style={styles.imageContainer}>
                        <Image source={uovLogoImage} style={styles.image} />
                    </View>

                    {/* Dynamic Screen Content */}
                    <View style={styles.screenContainer}>
                        {renderScreen()}
                    </View>
                
                    
                </ScrollView>
                </View>

                {/* Footer with Bottom Navigation */}
                <View style={styles.footer}>
                        <TouchableOpacity onPress={() => setActiveScreen('Profile')} style={styles.tabButton}>
                            <Icon name="account" size={24} color={activeScreen === 'Profile' ? 'white' : 'gray'} />
                            <Text style={[styles.tabLabel, activeScreen === 'Profile' && styles.activeTabLabel]}>
                                Profile
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveScreen('Course')} style={styles.tabButton}>
                            <Icon name="book-open" size={24} color={activeScreen === 'Course' ? 'white' : 'gray'} />
                            <Text style={[styles.tabLabel, activeScreen === 'Course' && styles.activeTabLabel]}>
                                Course
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveScreen('Subjects')} style={styles.tabButton}>
                            <Icon name="file-document" size={24} color={activeScreen === 'Subjects' ? 'white' : 'gray'} />
                            <Text style={[styles.tabLabel, activeScreen === 'Subjects' && styles.activeTabLabel]}>
                                Subjects
                            </Text>
                        </TouchableOpacity>
                </View>

                
            </SafeAreaView>
        </PaperProvider>
    );
}

function ProfileScreen() {
    return (
        <View style={styles.screen}>
            <Text variant="headlineLarge">Profile Screen</Text>
        </View>
    );
}

function CourseScreen() {
    return (
        <View style={styles.screen}>
            <Text variant="headlineLarge">Course Screen</Text>
        </View>
    );
}

function SubjectsScreen() {
    return (
        <View style={styles.screen}>
            <Text variant="headlineLarge">Subjects Screen</Text>
        </View>
    );
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
    screenContainer: {
        flex: 1,
        backgroundColor: 'green',
        padding: 20,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabLabel: {
        color: 'gray',
        fontSize: 12,
        marginTop: 5,
    },
    activeTabLabel: {
        color: 'white',
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
