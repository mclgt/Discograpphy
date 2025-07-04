import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
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
});
export default styles;
