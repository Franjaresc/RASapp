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
    margin: 10,
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
    color: "#3a3a3a",
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
    color: "#666"
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginTop: 2
  },
  bodyText:{
    color: "#666",
    fontSize: 15,
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
  headerText:{
    fontSize: 18,
    fontWeight: "600",
    color: "#fff"
  },


})
export default Styles;