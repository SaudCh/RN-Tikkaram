import { View, Text, StyleSheet, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitCartData'

const height = Dimensions.get('window').height;

export default function FruitCart() {
    const data = getFruits()

    return (
        <View style={{ ...styles.container }}>
            <StatusBar auto />

            <View style={{ ...styles.cardContainer }}>

                <FlatList
                    numColumns={2}
                    data={data}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <FruitsCard title={item.title} icon={item.img} price={item.price} />
                    )}
                />

                <View style={{ height: 100 }}>

                </View>
            </View>
            <View style={{ ...styles.totalContainer }}>
                <Text style={{ color: "#fff", marginRight: 100 }}>Order Now</Text>
                <TouchableOpacity style={{ backgroundColor: "rgba(000,000,000,0.4)", paddingHorizontal: 30, paddingVertical: 5, borderRadius: 50 }}>
                    <Text style={{ color: "#fff" }}>20.0 JD</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height,
    },
    searchContainer: {
        backgroundColor: '#00CBA4',
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
    cardContainer: {
        padding: 10
    },
    categoryContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 10
    },
    active: {
        borderWidth: 1,
        borderColor: "#FA9755",
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
    nActive: {
        backgroundColor: "#E4E4E4",
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
    totalContainer: {
        position: "absolute",
        bottom: 0,
        zIndex: 2,
        height: 120,
        width: "100%",
        backgroundColor: "#00CBA4",
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: 'row',
        paddingTop: 10
    }
})