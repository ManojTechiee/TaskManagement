import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
const CustomButton = ({
    text,
    onPress,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <View style={styles.wrap}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default CustomButton;