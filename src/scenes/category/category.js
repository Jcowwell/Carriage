
import React, { Component } from 'react';
import { StyleSheet, View, Text} from "react-native";

export class CategoryScreen extends Component {
    render() {
        return(
        <View syles={styles.container}>
            <Text>
                Category
            </Text>
            {/* TopBar */}
            {/* Vendor Categories Listings */}
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