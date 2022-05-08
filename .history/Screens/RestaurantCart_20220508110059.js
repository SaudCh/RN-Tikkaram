import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RestaurantCart() {
  return (
    <View>
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
  }
})