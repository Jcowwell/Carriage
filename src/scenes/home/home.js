
import React, { Component } from 'react';
import { StyleSheet, View, Text} from "react-native";

export class HomeScreen extends Component {
    render() {
        return(
        <View syles={styles.container}>
            <Text>
                Home
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: 414,
        backgroundColor: '#32965D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'white',
      },
  });