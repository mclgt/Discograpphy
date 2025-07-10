import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        backgroundColor: '#f1f1f1',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Monoton',
        color: '#333',
    },
    red: {
        color: '#ff3131',
        fontFamily: 'Monoton',
    },
    titolominore:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    testo:{
        fontSize: 18,
        fontFamily: 'Fredoka',
        color:'#333',
        textAlign:'center',
    },
    goBackButton: {
        padding: 10,
        backgroundColor: '#ff3131',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        marginLeft: 'auto',
    },
    congratsbox:
    {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        width: 200,              
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    riga:
    {
        flexDirection: 'row',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
     portrait: {
    flex: 1,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landscape: {
    flex: 1,
    backgroundColor: '#90ee90',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
