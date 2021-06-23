import {
  StyleSheet,
} from 'react-native'
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  containerAppStack: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
  },
  containerRadioButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    margin: 2,
  },
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: '#67AB6A',
    padding: 10,
    margin: 10,
    height: 40,
    borderRadius: 20,
    width: 300,
  },
  buttonSecundary:{
    alignItems: 'center',
    backgroundColor: '#67AB6A',
    borderRadius: 20,
    padding: 10,
    margin: 5,
    height: 40,
    width: 150,
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 10,
    borderBottomWidth: 0.5,
    fontSize: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4158A0",
    height: 40,
    width: 300,
    margin: 10,
    textAlign: 'center',
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonWithoutBackgroudColor: {
    alignItems: 'center',
    padding: 10,
    margin: 0,
    height: 40,
  },
  buttonWithoutBackgroudColorText: {
    color: '#67AB6A',
    fontSize: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  dropDownPicker: {
    height: 45,
    width: 300,
    margin: 10,
  },
  containerFlatlist: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  content: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4158A0"
  },
  subtitle: {
    color: "#67AB6A",
    fontSize: 16,
    marginTop: 2
  },
  bodyText:{
    color: "#4158A0",
    fontSize: 15,
  },
  bodyTextResul:{
    color: "#4158A0",
    fontSize: 15,
    width: 300, 
    height: 'auto',
    textAlign:'center'
  },
  separator: {
    backgroundColor: "#67AB6A",
    height: 1
  },
  right: {
    alignItems: "flex-end",
    flex: 1
  },
  header: {
    height: 50,
    backgroundColor: "#4158A0",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300, 
    height: 119 
  },
  appImage: {
    width: 90, 
    height: 90,
  },
  headerText:{
    fontSize: 18,
    fontWeight: "600",
    color: "#fff"
  },
  popUp:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  titlePopUp:{
    margin:10,
    fontSize: 18,
    fontWeight: "600",
    color: "#4158A0"
  },
  checkbox: {
    alignSelf: "center",
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  radioButtonColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  radioButtonBox: {
    width: 150, 
    height: 50,
    margin:5,
  },
  radioButtonBoxColumn: {
    width: 300, 
    height: 'auto',
    margin:5,
  },
  radioButtonText: {
    
    fontWeight: "600",
    color: "#4158A0",
    textAlign: 'justify',
    marginLeft: 10,
  },

})
export default Styles;