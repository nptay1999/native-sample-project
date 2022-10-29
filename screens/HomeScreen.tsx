import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-green-600 text-sm">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen