import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop:20,
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
        color: '#333',
        fontFamily:'Monoton',
    },
    red: {
        color: '#ff3131',
        fontStyle: 'Monoton',
    },
    row: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    specedrow: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 0,
        marginVertical: 20,
        flex:1,
    },
    minorTitle: {
        fontSize: 18,
        color:'#333',
        fontFamily:'Fredoka',
    },

    container: {
        flexdirection: 'row',
        padding: 10,
        backgroundColor: '#dfdfdf',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        width: 200, 
        height:420,
    },
    image: {
        aspectRatio:1,
        resizeMode:'contain',
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#ccc',
        alignContent: 'center',
        width: '100%',
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Fredoka',
        marginBottom: 5,
    },
    description: {
        fontFamily:'Fredoka',
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    buttonText:{
        paddingRight:80,
        fontWeight: 900
    },
    noVinyls:{
        fontSize: 18,
        fontFamily: 'Fredoka',
        padding: 20,
        textAlign: 'center',
    },

}); 
export default styles;
