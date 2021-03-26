
import React, { Component } from 'react';
import { StyleSheet, View, Text} from "react-native";

export class SearchScreen extends Component {
    render() {
        return(
        <View syles={styles.container}>
            <Text>
                Search
            </Text>
            {/* TopBar */}
            {/* Search View */}
            {/* Search Results */}
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