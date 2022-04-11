import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const LikeButton = () => {
    let iconName = 'heart-circle-outline'
    let color = 'red'
    let statusButton = false
    
    const toogleButtom = () => {
        if (statusButton = true) {
            iconName = 'ios-heart-circle'
            color = 'gray'
            statusButton = false
            } else {
            iconName = 'ios-heart-circle-outline'
            color = 'red'
            statusButton = true
            }}

    return (
    <TouchableOpacity onPress={ toogleButtom }>
        <Text padding={20}>
        <Ionicons name={iconName} size={28} color={color}/>
        </Text>
    </TouchableOpacity>
    )
}
