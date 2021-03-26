
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions} from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class HomeScreen extends Component {
    render() {
        return(
        <View syles={styles.container}>
            {/* TopBar */}
            <TopBar></TopBar>
            <Text>
                Home
            </Text>
            {/* Favorite Vendors */}
            {/* Ad Banner */}
            {/* Vendor Listings */}
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
        backgroundColor: '#32965D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'white',
      },

      topbarContainer: {
        height: deviceHeight/8,
        width: deviceWidth,
        backgroundColor: '#32965D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'white',
      },
  });