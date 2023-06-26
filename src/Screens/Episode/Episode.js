import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Episode = () => {
  return (
    <View style={styles.main}>
        <View style={styles.mainar}>
       
        <Image source={require('../assets/arrow.png')} style={{ width: 20, height: 20, marginTop:hp('2.2%')}} />
        <Text style={styles.txtsele}>Select All</Text> 
        </View>
        <View style={styles.mainpr}>
      <Progress.Bar progress={0.1} width={280} height={10} color={'#187498'} borderColor={'#000'} borderBottomColor={'#ECECEC'} style={styles.progg} />
      <Text style={styles.txt10}>1/100 </Text> 
    </View>
    <View style={styles.mainep}>   
       
         <Text style={styles.txte}>Episode 1{"\n"}2023-05-03</Text>
         <View style={styles.circle}>
         <Image source={require('../assets/check.png')} style={{ width: 20, height: 20, marginTop:hp('2.2%')}} />
      </View>

         </View>

         <View style={styles.hrline} />
    </View>
  )
}

export default Episode

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: 'black',
      },
      progg: {
        marginTop: hp('3.2%'),
        marginLeft: hp('1.1%'),
      },
      txt10:{
        color:'white',
        marginTop:hp('2.4%'),
        marginLeft: hp('5.8%'),
      },
      mainpr:{
        flexDirection:'row',
        
      },
      txte:{
        color:'white',
        marginTop: hp('3.2%'),
        marginLeft: hp('1.1%'),
      },
      mainep:{
        flexDirection:'row',
      },
      circle:{
        backgroundColor:'white',
    height:hp('1.9%'),
    width:wp('2.9%'),
    borderRadius:50,
    marginTop:hp('3.8%'),
    marginLeft:hp('35.8%'),
    },
    hrline: {
        marginTop:hp('1.7%'),
        height: hp('0.05%'),
        width: wp('100%'),
        backgroundColor: '#fff'
      
      },
      mainar:{
        flexDirection:'row',
      },
      txtsele:{
        color:'white',
        fontSize: hp('2.3%'),
        marginLeft: hp('38.8%'),
        marginTop:hp('1.7%'),

      },
})