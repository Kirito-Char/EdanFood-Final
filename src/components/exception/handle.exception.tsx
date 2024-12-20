import React from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const HandleException = ({ error, retry }: { error: Error; retry: () => void }) => {
    return (
        <View style={styles.content}>
            {/* Animation lỗi */}
            <LottieView
                source={require('@/assets/animation/animation-error.json')} // Tải animation từ file .json
                autoPlay
                loop
                style={styles.animation}
            />

            <View style={styles.errorBox}>
                <Text style={styles.errorTitle}>Oops! Something went wrong</Text>
                <Text style={styles.errorMessage}>{error.message}</Text>
            </View>

            {/* Nút thử lại */}
            <TouchableOpacity style={styles.retryButton} onPress={retry}>
                <Text style={styles.retryText}>Try Again</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5, // shadow effect for Android
        shadowColor: '#000', // shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    animation: {
        width: 350,
        height: 350,
        marginBottom: 20,
    },
    errorBox: {
        backgroundColor: '#ff4d4d',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    errorMessage: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    retryButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
        elevation: 3,
    },
    retryText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
});

export default HandleException;