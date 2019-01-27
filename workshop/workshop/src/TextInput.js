import React, { Component } from 'react';
import {
    Alert,
    TextInput,
    View,
    Text,
    Image,
    TouchableHighlight,
    StatusBar,
    KeyboardAvoidingView,
    AsyncStorage,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import mycss from './components/component';
import logo from './img/umoneyL.png';
import la from './img/la.png';
import eng from './img/eng.png';
import mystyle from './components/component';
import Button from './components/button';
import { StackActions, NavigationActions } from 'react-navigation';


export default class MyTextInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isTrue: false,
            enter_text: '',
            error_status: true,
        }
    }

    Clickme = async () => {
        const { enter_text } = this.state;
        if (enter_text.trim() != 0 && enter_text.trim() == 9) {
            this.setState({ enter_text: enter_text, error_status: true });
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('Home');
        } else {
            this.setState({ enter_text: enter_text, error_status: false });
        }
        if (enter_text == "") {
            Alert.alert("Please enter Phone No 9");
            return;
        }
        Alert.alert("Hello Number : " + this.state.enter_text);
    }

    onEnterText = (enter_text) => {
        if (enter_text.trim() != 0) {
            this.setState({ enter_text: enter_text, error_status: true });
        } else {
            this.setState({ enter_text: enter_text, error_status: false });
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={mycss.container}>
                <StatusBar
                    backgroundColor="#3bace1"
                    barStyle="light-content"
                />
                <Image source={logo} style={mycss.lognew} />
                <Text style={mycss.textheader}>u-money</Text>
                <Text style={mycss.textcontent}>It will give you the convenience of money transfers and payments at any time</Text>
                <View style={mycss.contentview}>
                    <Text style={mycss.textphonetitle}>Phone No</Text>
                    <TextInput placeholder={'Enter Phone No'}
                        keyboardType={'numeric'}
                        style={mycss.textNumberInput}
                        onChangeText={enter_text => this.onEnterText(enter_text)}
                    // onChangeText={
                    //     enter_text=> this.setState({enter_text})
                    // }
                    />
                    {
                        this.state.error_status == false ? (    
                            <Text style={mycss.errorMessage}>
                                * Please enter Phone No.
                            </Text>
                        ) : null
                    }
                    <CheckBox
                        title='Save information'
                        checked={this.state.isTrue}
                        style={mycss.checkcontainer}
                        onPress={() => this.setState({ isTrue: !this.state.isTrue })}
                        containerStyle={{ marginLeft: 10, marginRight: 20, marginBottom: 20, padding: 0, borderWidth: 0, backgroundColor: 'white' }}
                        checkedColor={'#9c9d9e'}
                    />
                    <View style={mycss.containerTouch}>
                        <TouchableHighlight>
                            <Image source={la} style={mycss.lgbtn} />
                        </TouchableHighlight>
                        <View><Text>    </Text></View>
                        <TouchableHighlight>
                            <Image source={eng} style={mycss.lgbtn} />
                        </TouchableHighlight>
                    </View>
                    <View style={mycss.btnview}>
                        <Button style={mycss.btnLg} onPress={this.Clickme} text="Game" styleText={mycss.btnLg_Text}/>
                    </View>
                </View>

                <Text style={mycss.textbottom1}>
                    Verion 1.10.15
                </Text>
                <Text style={mycss.textbottom2}>
                    Oct, 5th 2018
                </Text>
            </KeyboardAvoidingView>
        );
    }
}