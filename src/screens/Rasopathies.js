import React, { useState } from 'react'
import Styles from '../styles/Styles'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Alert, 
} from 'react-native'
import RAS from "../data/RasopathiesDB";
import { FlatListComponent, Separator } from "../components/FlatListComponent";
import {Header} from '../components/Header'




const Rasopathies = ({ navigation }) => {
  
    
  const [showPopUp, setShowPopUp] = useState(false);
  const [sintomas, setSintomas] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  
  return (
    <SafeAreaView style={Styles.containerAppStack}>
      <Header 
        title={"RASopatías"}
      />
      <FlatList
        data={RAS}
        keyExtractor={item => {
          return `${item.sindrome}-${item.genes}`;
        }}
        renderItem={({ item }) => {
          
    
          return (
            <FlatListComponent
              
              title={item.sindrome}
              subtitle={item.genes}
            />
          );
        }}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => <Separator />}
        ListFooterComponent={() => <Separator />}
      />
      
    </SafeAreaView>
  );

}

export default Rasopathies;