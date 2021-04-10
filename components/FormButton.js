import React from 'react';
import{ Text, TouchableOpacity, StyleSheet } from 'react-native'
import { windowHeight } from '../utils/Dimensions'

const FormButton = ({buttonTitle, ...rest})=> {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text styles={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
}

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop : 10,
        width: '50%',
        height: windowHeight / 15,
        backgroundColor: '#87ecae',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3

    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(253, 253, 253)',
    }
});