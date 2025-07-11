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
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Monoton',
        color: '#333',
    },
    red: {
        color: '#ff3131',
        fontFamily: 'Monoton',
    },
    searchContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: '#dfdfdf',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#dfdfdf',
    },
    searchButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#ff3131',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    filterButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#ff3131',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    noVinyls:{
        fontSize: 18,
        fontFamily: 'Fredoka',
        padding: 20,
        textAlign: 'center',
    }
});
export default styles;