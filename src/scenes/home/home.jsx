
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView, ScrollView, ImageBackground} from "react-native";
import {FavoriteVendors, Carousel} from '../../components/molecules'
import {Colors} from '../../styles'



let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              banner: require('../../assets/images/BannerImages/aisle.jpeg'),
              desc: '',
            },
            {
                banner: require('../../assets/images/BannerImages/bodega.jpeg'),
                desc: '',
            },
            {
                banner: require('../../assets/images/BannerImages/deli.jpeg'),
                desc: '',
            },
            {
                banner: require('../../assets/images/BannerImages/grocery.jpeg'),
                desc: '',
            },
            {
                banner: require('../../assets/images/BannerImages/produce.jpeg'),
                desc: '',
            },
          ],
        };
        
      }

    render() {
        return(
        <View style={styles.container}>
            <ImageBackground
             source={require('../../assets/images/main_background.jpg')} 
             style={styles.background} 
             imageStyle={styles.imageStyle}>
                
                {/* TopBar */}
                <TopBar></TopBar>
                {/* Favorite Vendors */}
                <FavoriteVendors></FavoriteVendors>
                {/* Ad Banner */}
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.separator}>
                            <Carousel
                            data={this.state.data}
                            imageKey={'banner'}
                            local='true'
                            timer={5000}
                            onPress={() =>
                                this.props.navigation.navigate('Coupons')
                            }
                            indicatorContainerStyle={{position:'absolute', bottom: 20}}
                            indicatorActiveColor={Colors.TERTIARY}
                            indicatorInActiveColor={'#ffffff'}
                            indicatorActiveWidth={10}
                            animation
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
                {/* Vendor Listings */}
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
        height: 150,
    },

    topbarContainer: {
        height: deviceHeight/7,
        width: deviceWidth,
        backgroundColor: '#32965D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
  });