import {
    StyleSheet,
  } from 'react-native'
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    height: 40,
    width: 300,
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 10,
    borderBottomWidth : 0.5,
    //borderWidth: 1,
  },
  containerHorizontal: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWithoutBackgroudColor: {
    alignItems: 'center',
    padding: 10,
    margin: 0,
    height: 40,
  },
  buttonWithoutBackgroudColorText: {
    color: '#0069F7'
  }

})
export default Styles;