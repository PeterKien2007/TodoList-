import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    addTask :{
        bottom : 30,
        paddingHorizontal : 20,
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
        alignItems : 'center',
    
    },
    input : {
        height : 44,
        backgroundColor : '#fff',
        width : '80%',
        borderWidth : 1,
        borderColor : '#21a3d0',
        borderRadius : 20,
        paddingHorizontal : 15,
        paddingVertical : 10,
    },
    iconWrapper : {
        width : 44,
        height : 44,
        backgroundColor : '#21a3d0',
        borderRadius : 50,
        justifyContent : 'center',
        alignItems : 'center'
    },
    icon : {
       fontSize : 25,
       color : '#fff'
    }
})


export default styles;