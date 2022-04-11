import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const DislikeButton = () => {

    let iconName = 'heart-dislike-outline'
    
    
    const toogleButtom = () => {
        if (statusButton = true) {
            iconName = 'heart-dislike'
            color = 'gray'
            statusButton = false
            } else {
            iconName = 'ios-heart-circle-outline'
            color = 'red'
            statusButton = true
            }}

    let color = 'gray'
    let statusButton = false


    return (
    <TouchableOpacity onPress={toogleButtom}>
        <Text>
        <Ionicons name={iconName} size={28} color={color}/>
        </Text>
    </TouchableOpacity>
    )
}
