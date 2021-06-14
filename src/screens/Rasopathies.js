import React, { useState } from 'react'
import Styles from '../styles/Styles'
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Alert, 
} from 'react-native'
import users from "../data/users";
import { FlatListComponent, Separator } from "../components/FlatListComponent";
import {Header} from '../components/Header'



const Rasopathies = ({ navigation }) => {
  const createAlert = () =>{
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
    
    
  const [selectedId, setSelectedId] = useState(null);

  
  return (
    <SafeAreaView style={Styles.containerAppStack}>
      <Header 
        title={"RASopatías"}
      />
      <FlatList
        data={users}
        keyExtractor={item => {
          return `${item.id.value}-${item.phone}`;
        }}
        renderItem={({ item }) => {
          const name = `${item.name.first} ${item.name.last}`;
    
          return (
            <FlatListComponent
              image={{ uri: item.picture.thumbnail }}
              title={name}
              subtitle={item.email}
              onPress={createAlert}
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