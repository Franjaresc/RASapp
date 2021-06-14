import React from "react";
import { View, Text, CheckBox } from "react-native";
import Styles from '../styles/Styles'

export const FlatListCheckBox = ({ title, subtitle, isCheck, setCheck }) => (

    <View style={Styles.containerFlatlist}>

        <View style={Styles.content}>
            <Text style={Styles.title}>{title}</Text>
            <Text style={Styles.subtitle}>{subtitle}</Text>
            <CheckBox
                value={isCheck}
                onValueChange={setCheck}
                style={Styles.checkbox}
            />
        </View>

    </View>
);
export const Separator = () => <View style={Styles.separator} />;