
import React, { Component } from 'react';
import { StyleSheet, View, Text} from "react-native";

export class SettingScreen extends Component {
    render() {
        return(
        <View syles={styles.container}>
            <Text>
                Settings
            </Text>
            {/* TopBar */}
            {/* Setting View Blocks*/}
        </View>
        );
    }
}

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
  });