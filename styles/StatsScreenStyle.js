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
    smallheader:{
        fontSize: 18,
        fontFamily: 'FredokaMedium',
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
        justifyContent:'space-evenly',
        padding: 5,
        width: 200,              
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    row:
    {
        flexDirection: 'row',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    centeredrow:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        paddingHorizontal: 10,
        marginVertical: 10,
        alignItems:'center'
    },
    text:{
        fontSize: 18,
        fontFamily: 'Fredoka',
        color:'#333',
        textAlign:'center',
    },
    charts: {
        borderRadius: 25, overflow: 'hidden'
    },
    biggerTitle:{
        fontSize: 18,
        fontFamily: 'FredokaSemiBold',
        color:'#333',
        textAlign:'center',
        marginVertical: 10,
    },
    noVinyls:{
        fontSize: 18,
        fontFamily: 'Fredoka',
        paddingLeft: 100,
        textAlign:'center'
    },
});
export default styles;
