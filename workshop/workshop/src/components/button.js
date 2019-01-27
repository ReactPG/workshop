import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class Button extends Component {
  render() {
    return (
        <TouchableHighlight 
            style={this.props.style}
            onPress={this.props.onPress}
        >
            <Text style={this.props.styleText}>{this.props.text}</Text>
        </TouchableHighlight>
    )
  }
}
