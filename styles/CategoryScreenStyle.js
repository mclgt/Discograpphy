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
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 16,
        marginVertical: 10,
    },
    testo:{
        fontSize: 18,
        fontFamily: 'Fredoka',
        color:'#333',
        textAlign:'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
     addButton: {
        padding: 10,
        backgroundColor: '#ff3131',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    addButtontext: {
        color: '#fff',
        fontFamily: 'Fredoka',
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
    riga:
    {
        flexDirection: 'row',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        marginVertical: 10,
    }
}); 
export default styles;