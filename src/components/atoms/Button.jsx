import React, { Component } from "react";
import { StyleSheet, Platform, Image, View, TouchableHighlight } from "react-native";
import {Colors} from '../../styles'

const onPress = () => '';

export class Button extends Component {

    

    render() {
        return(
        <View>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.favorite}>
                </View>
            </TouchableHighlight>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    favorite: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor: Colors.BLACK,
        borderWidth: 1,
    },
});