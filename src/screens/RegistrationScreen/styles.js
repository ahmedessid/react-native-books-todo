import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white'
    },
    title: {

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
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 40,
        marginRight: 40,
        paddingLeft: 20,
        elevation: 20,
        borderWidth:1,
        borderColor: "#0000000A",
        shadowColor: "#00000033",
        shadowRadius: 8,
    },
    button: {
        backgroundColor: '#697BCE',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        height: 52,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        opacity:0.65,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16
    }
})