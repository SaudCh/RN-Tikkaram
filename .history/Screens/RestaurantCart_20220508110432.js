import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { HStack } from 'native-base'
import { Decrement, Increment } from '../Components/Icons'

export default function RestaurantCart() {
  return (
    <View style={{ ...styles.container }}>
      <StatusBar auto />

      <View>
        <HStack>
          <View>

          </View>
          <View>
            <View style={{ ...styles.quantityContainer }}>
              <View style={{ ...styles.decrementContainer }}>
                <Decrement />
              </View>
              <View style={{ ...styles.cartQuantity }}>
                <Text style={{ color: '#404852', fontSize: 12 }}>1.5kg</Text>
              </View>
              <View style={{ ...styles.incrementContainer }}>
                <Increment />
              </View>
            </View>
          </View>
        </HStack>
      </View>

      <View style={{ ...styles.totalContainer }}>
        <Text style={{ color: "#fff", marginRight: 100 }}>Order Now</Text>
        <TouchableOpacity style={{ backgroundColor: "rgba(000,000,000,0.4)", paddingHorizontal: 30, paddingVertical: 5, borderRadius: 50 }}>
          <Text style={{ color: "#fff" }}>20.0 JD</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    flex: 1,
  },
  cardContainer: {
    padding: 10
  },
  totalContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    height: 120,
    width: "100%",
    backgroundColor: "#FF9D52",
    justifyContent: "center",
    alignItems: "baseline",
    flexDirection: 'row',
    paddingTop: 10
  },
  decrementContainer: {
    borderRightWidth: 1,
    borderColor: '#979797',
    alignItems: 'center',
    justifyContent: "center",
    height: 25,
    width: 25
  },
  incrementContainer: {
    borderLeftWidth: 1,
    borderColor: '#979797',
    alignItems: 'center',
    justifyContent: "center",
    height: 25,
    width: 25
  },
  cartQuantity: {
    justifyContent: "center",
    alignItems: "center",
    width: 40
  },
})