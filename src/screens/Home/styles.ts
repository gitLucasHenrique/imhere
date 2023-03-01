import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7ce68c',
      padding: 24
    },
    eventName: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#000',
      fontSize: 16
    },
    input: {
        height: 56,
        flex: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        color: '#000',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#0b4a29',
        borderRadius: 10,
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
      color: '#000',
      fontSize: 20,
      textAlign: 'center'
    }
})