import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      item : {
        flexDirection : 'row',
        backgroundColor : '#fff',
        marginBottom : 10,
        paddingHorizontal : 20,
        paddingVertical : 10,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'space-between' 
      },
      square : {
        width : 48,
        height : 36,
        backgroundColor : '#53d6f2',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10
        
      },
      number : {
        fontWeight : 15,
        fontWeight : '700',
        color : '#fff'
      },
      content : {
        fontSize : 15,
        width : '80%'
      },
})


export default styles;