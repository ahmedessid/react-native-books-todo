import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor:'white'
    },
    formContainer: {
        flex: 1, 
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    logo: {
        height:200,
        alignSelf: "center",
        marginHorizontal: 30,
        marginTop:80,
        marginBottom:0,
        resizeMode: 'contain'
    },
    input: {
        height: 54,
        flex:1,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: 8,
        marginRight: 8,
        paddingLeft: 20,
        elevation: 20,
        borderWidth:1,
        borderColor: "#0000000A",
        shadowColor: "#00000033",
        shadowRadius: 8,
    },
    button: {
        backgroundColor: '#697BCE',
        height: 54,
        width: 80,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        marginHorizontal:30,
        padding: 20,
        
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#0000000A',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})