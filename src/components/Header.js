import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../styles/Styles'
export const Header = ({title}) => {
    return (
        <View style={Styles.header}>
            <View>
                <Text style={Styles.headerText}>{title}</Text> 
            </View>
        </View>
    )
}
