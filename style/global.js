import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff5d55',
        alignItems: 'center',
        justifyContent: 'top',
    },
    titulo: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    titulo2: {
        marginTop: 20,
        fontSize: 20,
        marginRight: 200,
    },
    titulo3: {
        marginTop: 5,
        fontSize: 10,
        marginRight: 200,
    },
    textoBaixo: {
        marginTop: 5,
        fontSize: 10,
        marginBottom: 20
    },
    imagemTitulo: {
        height: 40,
        width: 40,
        justifyContent: 'center', 
        marginTop: 50,
    },
    input: {
        backgroundColor: '#ff5d55',
        height: '10%',
        width: '73%',
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5,
    },
    icons: {
        height: 30,
        width: 30,
        marginRight: 30,
        marginLeft: 30
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})