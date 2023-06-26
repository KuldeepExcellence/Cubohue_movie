import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Seasons = () => {
  return (
    <View style={styles.main}>
         <Image source={require('../assets/bharat.jpeg')} style={{ width: wp('100%'), height:hp('20%')}} />
         <View style={styles.maintxt}>
      <Text style={styles.txt}>Bharat</Text>
      <Text style={styles.txtdate}>2023-05-17</Text>
      <Text style={styles.txthr}>2h 2m PG-13</Text>
      <Text style={styles.txtsea}>Seasons</Text>
     <View style={styles.maincir}>
      <View style={styles.circle}>
      </View>
      <Text style={styles.txtsea1}>Season 1</Text> 
      <Progress.Bar progress={0.1} width={200} height={10} color={'#187498'} borderColor={'#000'} borderBottomColor={'#ECECEC'} style={styles.progg} />
      <Text style={styles.txt10}>1/100 </Text> 
      </View>
      <Image source={require('../assets/check.png')} style={{ width: 20, height: 20, }} />
      </View>
     
    </View>
  )
}

export default Seasons

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: 'black',
      },
      txt:{
        color:'white',
      fontSize:hp('2.9%'),
    },
    maintxt:{
        padding:14,
    },
    txtdate:{
        marginTop:hp('0.4%'),
        color:'#737373',
    },
    txthr:{
        color:'#737373',
    },
    txtsea:{
        color:'white',
        fontSize:hp('2.9%'),
        marginTop:hp('2.7%'),
    },
    circle:{
        backgroundColor:'white',
    height:hp('1.9%'),
    width:wp('2.9%'),
    borderRadius:50,
    marginTop:hp('2.7%'),
    },
    maincir:{
        flexDirection:'row',
    },
    txtsea1:{
        color:'white',
        marginTop:hp('2.4%'),
        marginLeft:hp('2.8%'),
    },
    progg: {
        marginTop: hp('3.2%'),
        marginLeft: hp('2.1%'),
      },
      txt10:{
        color:'white',
        marginTop:hp('2.4%'),
      },
})