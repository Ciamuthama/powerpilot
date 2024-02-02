import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

export default function homescreen() {
  return (
    <View className='flex justify-center w-full'>
      <Text className='font-bold text-red-600'>homescreen</Text>
      <Link href={'/'}>Home</Link>
    </View>
  )
}