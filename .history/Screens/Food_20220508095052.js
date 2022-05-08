import { View, Text, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Home, Search } from '../Components/Icons'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitData'

const height = Dimensions.get('window').height;

export default function Foods() {
    const data = getFruits()
    const [cat, setCat] = useState("all")
    const [fdata, setFdata] = useState(data)

    useEffect(() => {
        const dat1 = data.filter((val) =>
            val.keyword.toLowerCase().includes(cat.toLowerCase())
        )
        setFdata(dat1)
    }, [cat])

    return (
        <View style={{ ...styles.container }}>
            <StatusBar auto />
            <View style={{ ...styles.searchContainer }}>
                <Home />
                <View style={{ ...styles.searchSubContainer }}>
                    <Search />
                    <TextInput style={{ ...styles.searchInput }} placeholder='Search' />
                </View>
            </View>

            <View style={{ ...styles.restaurantContainer }}>
                <Image source={require("../Images/Restaurants/rs3.png")} style={{ width: 100, height: 100, resizeMode: "contain" }} />
                <View>
                    <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular" }}>Restaurants Name</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height
    },
    searchContainer: {
        backgroundColor: '#FF9D52',
        paddingBottom: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    searchSubContainer: {
        marginVertical: 5,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 20,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: "row"
    },
    searchInput: {
        height: 40,
        width: "90%",
        paddingLeft: 5
    },
    restaurantContainer: {
        padding: 10
    }

})