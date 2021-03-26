
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions} from "react-native";
import {Button} from '../atoms'
import {Colors} from '../../styles'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class FavoriteVendors extends Component {
    render() {
        return(
        // REVIEW: - Make FlatLists
        <View style={styles.container}>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight / 10,
        width: deviceWidth,
        backgroundColor: Colors.PRIMARY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
  });