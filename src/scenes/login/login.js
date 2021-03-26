
import React, { Component } from 'react';
import { StyleSheet, View, Text} from "react-native";

export class LoginScreen extends Component {
    render() {
        return(
        <View syles={styles.container}>
            <Text>
                LoginScreen
            </Text>
            {/* Email Text Input */}
            {/* Password Text Input */}
            {/* Sign Up Button */}
            {/* Sign In Button */}
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