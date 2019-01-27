import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
export const IMAGE_HEIGHT = window.width / 2;

const mystyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3bace1',
    },
    logheader: {
        position: 'absolute',
        top: 15,
        alignItems: 'center',
        width: 120,
        height: 120
    },

    lognew:{
        width: 120,
        height: 120,
        resizeMode: 'contain',
        top: -20,
        // marginBottom: 20,
        // padding:10,
        // marginTop:15
    },
    textheader: {
        fontSize: 30,
        color: 'white',
    },
    textcontent: {
        width: WIDTH - 60,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        marginBottom: 20
    },
    contentview: {
        width: WIDTH - 55,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15
    },
    textphonetitle: {
        marginLeft: 10,
        color: '#3bace1',
        fontSize: 16,
    },
    textNumberInput: {
        color: 'black',
        fontSize: 16,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        height: 45,
        borderColor: "#cacaca"
    },
    checkcontainer: {
        backgroundColor: 'red',
        borderColor: "white"
    },
    textbottom1: {
        position: 'absolute',
        bottom: 25,
        alignItems: 'center',
        fontSize: 12,
        color: 'white',
    },
    textbottom2: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        fontSize: 12,
        color: 'white',
    },
    lgbtn: {
        width: 40,
        height: 30,
        padding: 10
    },
    containerTouch: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnLg: {
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            android: {
                padding: 20,
            }
        }),
        width: 250,
        height: 45,
        backgroundColor: "#105ab5",
        borderRadius: 10,
    },
    btnLg_Text: {
        fontSize: 16,
        color: 'white',
    },
    btnview: {
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft:5,
    }
});

export default mystyle;