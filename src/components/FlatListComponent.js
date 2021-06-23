
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Styles from '../styles/Styles'

export const FlatListComponent = ({ image, title, subtitle }) => (

    <View style={Styles.content}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.subtitle}>{subtitle}</Text>
    </View>
);
export const Separator = () => <View style={Styles.separator} />;