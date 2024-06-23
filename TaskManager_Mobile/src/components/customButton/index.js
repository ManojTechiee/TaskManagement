import React  from 'react';
import {  Text, StyleSheet, TouchableOpacity, View} from 'react-native';
const CustomButton = ({
    text,
    onPress,
    icon
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
                <View style={styles.wrap}>
                    <Text style={styles.textStyle}>{text}</Text>
                </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
    },
    btn: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        width: 20,
        height: 20,
      },
      wrap:{
        flexDirection:"row",
        alignItems:"center",
        gap:2
      }
});

export default CustomButton;