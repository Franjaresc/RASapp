import React from 'react'
import { Overlay } from 'react-native-elements'
import Styles from '../styles/Styles'
const PopUp = ({ isVisible, setVisible, children, style}) => {
    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={style}
            onBackdropPress={()=>setVisible(false)}
        >
            {
                children
            }
        </Overlay>
    )
}

export default PopUp
