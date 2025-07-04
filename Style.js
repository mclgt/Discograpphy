import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop:20,
        backgroundColor: '#fff',
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
        fontWeight: 'bold',
        color: '#333',
    },
    red: {
        color: '#ff3131',
        fontWeight: '800',
        fontStyle: 'italic',
    },
    row: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    minorTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color:'#333'
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
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#ccc',
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
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
}); 
export default styles;
