import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const Countdown = () => {
  return (
    <>
 <StatusBar backgroundColor="#1a1a1a"/>
    <View style={styles.main}>
      <View style={styles.txttmain}>
      <Text style={styles.txtt}>Movies</Text>
    </View>
    </View>
    </>
  )
}

export default Countdown

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#000'
      },
      txttmain:{
        width:wp('96%'),
        height:hp('5.8%'),
        borderRadius:hp('1.2%'),
        marginTop:hp('2.3%'),
        marginLeft:hp('0.8%'),
        backgroundColor:'#1a1a1a',
      },
  txtt:{
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color:'white',
    marginLeft:hp('1.8%'),
    marginTop:hp('1.4%'),
  },
})