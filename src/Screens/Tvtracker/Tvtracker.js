import { Button, Pressable, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, FlatList, ScrollView, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { URL } from '../../Components/Baseurl/BaseUrl';
const data = [
  { id: 1, image: require('../assets/rrr.jpeg') },
  { id: 2, image: require('../assets/bharat.jpeg') },
  { id: 3, image: require('../assets/war.jpeg') },
  { id: 4, image: require('../assets/yaraave.jpeg') },
  { id: 5, image: require('../assets/maa.jpeg') },
  { id: 6, image: require('../assets/bhoot.jpeg') },
  // Add more image items as needed
];
const windowWidth = Dimensions.get('window').width;
const Tvtracker = ({ navigation }) => {
  // const {item}=route.params;
  const items = useSelector(state => state);
  console.log(items);
  const Getdata = ({ item, navigation }) => {
    console.log(item, 'item ``')
    return (<>
      <View style={{ marginTop: hp('2%') }}>
        <TouchableOpacity style={styles.mainimg} onPress={() => navigation.navigate("Tmc")}>
          <View>
            <Image source={{ uri: URL + item.backdrop_path }} style={{ width: wp('12%'), height: '120%' }} />
          </View>
          <View style={styles.maintxt1}>
            <Text style={styles.txt1}>{item.name}</Text>
            <View style={styles.mainprog}>
              <Progress.Bar progress={item.vote_count}width={270} height={10} color={'#187498'} borderColor={'#000'} borderBottomColor={'#ECECEC'} style={styles.progg} />
              <Text style={styles.epitxt}>{item.vote_average} </Text>
            </View>
            <View style={styles.mainleftinfo}>
              <View style={styles.infomain}>
                <Text style={styles.txxt}>Episode info</Text>
              </View>
              <Text style={styles.lefttxt}>0 left</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>)
  };
  return (
    <>
      <StatusBar backgroundColor="#1A1A1A" />
      <ScrollView style={styles.main} >
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={items}
            // keyExtractor={host_sublist => host_sublist.id}
            renderItem={({ item, index }) =>
              (<Getdata item={item} index={index} navigation={navigation}></Getdata>)} />
      </ScrollView >
      <View style={styles.mainbutt}>
      <TouchableOpacity style={styles.mainbtnn} onPress={() => navigation.navigate("Find")}>
        <Text style={styles.btntxt}>Add TV Show</Text>
      </TouchableOpacity>
      </View>
    </>)
}
export default Tvtracker
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
  mainbtnn: {
    backgroundColor: '#4D94FF',
    width: wp('50%'),
   
    height: hp('4.9%'),
    borderRadius: hp('1.8%'),
    // alignSelf:'center'
    // marginTop: hp('64.3%'),
    // marginLeft: hp('11.8%'),
    // marginBottom:hp('0.6%'),
  },
  mainimg: {
    flexDirection: 'row',
    height: hp('7%'),
    marginTop: hp('1.1%'),
  },
  maintxt1: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: wp('2.5%'),
  },
  mainprog: {
    flexDirection: 'row',
  },
  progg: {
    // marginTop: hp('4.4%'),
    // marginLeft: hp('-3.1%'),
  },
  btntxt: {
    color: 'white',
    marginLeft: hp('4.1%'),
    marginTop: hp('1.1%'),
    fontSize: hp('2.2%')
  },
  // txtin: {
  //   color: 'white',
  //   marginTop: hp('5.4%'),
  //   marginLeft: wp('-2.1%'),
  //   fontSize: hp('1.9%')
  // },
  txt1: {
    color: 'white',
    marginTop: hp('1.2%'),
    fontSize: hp('1.9%')
  },
  infomain: {
    backgroundColor: '#1A1A1A',
    height: hp('3%'),
    width: wp('26%'),
    marginTop: hp('0.9%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txxt: {
    color: 'white',
    fontSize: hp('1.9%')
  },
  mainleftinfo: {
    flexDirection: 'row',
  },
  epitxt: {
    color: 'white',
    // marginLeft: hp('-3.1%'),
    // marginTop: hp('-1.1%'),
  },
  lefttxt: {
    color: 'white',
    marginTop: hp('0.9%'),
    marginLeft: hp('1.1%'),
  },
  mainbutt:{
    width: wp('50%'),
    backgroundColor:'black',
    alignSelf:'center',
  alignItems:'flex-end',
  justifyContent:'flex-end',
  position:'absolute',
  bottom:0
  },
})



