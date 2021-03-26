
import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, ImageBackground} from "react-native";


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class CouponScreen extends Component {
    render() {
        return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/main_background.jpg')} 
                style={styles.background} 
                imageStyle={styles.imageStyle}>
                {/* TopBar */}
                <TopBar></TopBar>
                {/* Coupon Deals Listings */}
            </ImageBackground>
        </View>
        );
    }
}

const TopBar = (): Node => {
    return (
        <View style={styles.topbarContainer}>
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        resizeMode: 'cover',
      },

      background: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'rgb(255, 255, 255)',
      },

    imageStyle: {
        resizeMode: 'repeat',
        opacity: 0.4,
    },

    separator: {
        height: 230,
    },

    topbarContainer: {
        height: deviceHeight/9,
        width: deviceWidth,
        backgroundColor: '#32965D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
  });