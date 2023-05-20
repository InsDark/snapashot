import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
const Button = ({title, buttonStyle, textStyle, handler}) => {
    return (

            <TouchableOpacity onPress={handler} style={buttonStyle}>
                <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
    )
}

export default Button