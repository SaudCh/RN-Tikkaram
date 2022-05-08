import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { HStack } from 'native-base'
import { Decrement, Increment } from '../Components/Icons'

export default function RestaurantCart() {
  return (
    <View style={{ ...styles.container }}>
      <StatusBar auto />

      <View style={{ ...styles.cardContainer }}>
        <HStack justifyContent="space-between" alignItems="center">
          <View>
            <Text style={{ fontFamily: "arabicRegular", fontSize: 16, color: "#374151" }}>Food Name</Text>
            <Text style={{ fontFamily: "arabicRegular", fontSize: 14, color: "#00A27F" }}>2.3JD</Text>
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
      <View style={{ ...styles.cardContainer }}>
        <HStack justifyContent="space-between" alignItems="center">
          <View>
            <Text style={{ fontFamily: "arabicRegular", fontSize: 16, color: "#374151" }}>Food Name</Text>
            <Text style={{ fontFamily: "arabicRegular", fontSize: 14, color: "#00A27F" }}>2.3JD</Text>
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
      <View style={{ ...styles.cardContainer }}>
        <HStack justifyContent="space-between" alignItems="center">
          <View>
            <Text style={{ fontFamily: "arabicRegular", fontSize: 16, color: "#374151" }}>Food Name</Text>
            <Text style={{ fontFamily: "arabicRegular", fontSize: 14, color: "#00A27F" }}>2.3JD</Text>
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

      <View style={{ ...styles.cardContainer }}>
        <Text>Special request ? (my choice)</Text>
        <View style={{ borderWidth: 1, borderRadius: 10, height: 100 }} m="2">
          <TextInput style={{ padding: 5, }} placeholder='Write your request' />
        </View>
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
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

  },
  quantityContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#979797'
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