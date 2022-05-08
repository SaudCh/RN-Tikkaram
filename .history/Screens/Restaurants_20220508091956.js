import { View, Text, StyleSheet, TextInput, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Search } from '../Components/Icons'
import RestaurantCard from '../Components/RestaurantCard'
import { getRestaurants } from '../Data/RestaurantData'
import { RH1 } from '../Components/Logos'

const height = Dimensions.get('window').height;

export default function Restaurants() {
    const data = getRestaurants()
    return (
        <View style={{ ...styles.container }}>
            <StatusBar />
            <View style={{ ...styles.searchContainer }}>
                <View style={{ ...styles.searchSubContainer }}>
                    <Search />
                    <TextInput style={{ ...styles.searchInput }} placeholder='Search' />
                </View>
            </View>

            <View style={{ ...styles.headCard }}>
                <RH1 />
                <Text>All</Text>
            </View>

            <View style={{ ...styles.cardContainer }}>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <RestaurantCard icon={item.img} distance={item.distance} />
                    )}
                />
                <View style={{ height: 50 }}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height
    },
    searchContainer: {
        backgroundColor: '#FF9D52',
        paddingBottom: 15
    },
    searchSubContainer: {
        marginVertical: 5,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: "row"
    },
    searchInput: {
        height: 40,
        width: "100%",
        paddingLeft: 5
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headCard: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: 80,
        height: 80,
        alignItems:'center'
    },

})