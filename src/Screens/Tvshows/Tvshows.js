import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity, FlatList } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TmdbKey } from '../../Components/Baseurl/BaseUrl';
import { URL } from '../../Components/Baseurl/BaseUrl';
import Details from '../Details/Details';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/action/Acions';

const data = [
  { id: 1, image: require('../assets/carbon.jpeg') },
  { id: 2, image: require('../assets/president.jpeg') },
  { id: 3, image: require('../assets/poster.png') },
  { id: 4, image: require('../assets/hooked.jpeg') },
  { id: 5, image: require('../assets/intell.jpeg') },
  { id: 6, image: require('../assets/maa.jpeg') },
  // Add more image items as needed
];

const Tvshows = ({navigation}) => {

  const [searchtxt, setSearchtxt] = useState('')
  const [tvData, settvData] = useState('')

  console.log(tvData, 'tvData')


  const dispatch = useDispatch();

  const addItem = item => {
  dispatch(addItemToCart(item));
  console.log(item);
  };
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + TmdbKey, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        // "Authorization": "token " + userToken
      },
    }).then((result) => {
      result.json().then((res) => {
        // console.log(res)
        settvData(res.results)
      })
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const Getdata = ({ item,navigation }) => {

    console.log(URL+item.poster_path,'9799797')
    return(<>
    <View style={{ margin: 5 }}>
    <TouchableOpacity onPress={()=> navigation.navigate('Details',{item})}>
      <Image source={{ uri: URL + item.poster_path }} style={{ width:wp('47%'), height:hp('30%'), borderRadius: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity
         onPress={()=>{
          addItem(item);
          // console.log(item);
          }}   
      >
        <Image source={require('../assets/plussign.png')} style={{
          width: 30, height: 30, marginTop: hp('-4.3%'),
          marginLeft: hp('17.4%'), backgroundColor: 'white', borderRadius: 20
        }} />
        {/* <Image source={require('../assets/checked.png')} style={{
          width: 30, height: 30, marginTop: hp('-4.3%'),
          marginLeft: hp('19.4%'), backgroundColor: 'white', borderRadius: 20
        }} /> */}

      </TouchableOpacity>
    </View>
  </>)};


  return (
    <>

      {/*
  <StatusBar backgroundColor="#fff" /> */}
      <View style={styles.main}>
        <View style={styles.txttmain}>

          {/* <Text style={styles.txtt}>Tvshows</Text> */}
          <Image style={styles.searchLogo} source={require('../assets/searchwhite.png')} tintColor='#fff' />

          <TextInput style={{ height: 40, color: '#fff', marginLeft: hp('0.8%') }} placeholder="Movies & TV Shows"
            placeholderTextColor={'#fff'} onChangeText={newText => setSearchtxt(newText)}
            defaultValue={searchtxt}
          />

        </View>
        <Text style={styles.txtt}>Coming Soon</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={tvData}
          numColumns={2}
          // keyExtractor={host_sublist => host_sublist.id}
          renderItem={({ item, index }) =>
            (<Getdata item={item} index={index} navigation={navigation}></Getdata>)} />

      
      </View>

    </>)
}

export default Tvshows

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#000'
  },
  txttmain: {
    flexDirection: 'row',
    width: wp('96%'), 
    height: hp('5.0%'),
    borderRadius: hp('1.2%'),
    marginTop: hp('2.3%'),
    marginLeft: hp('0.8%'),
    backgroundColor: '#1a1a1a',
  },
  searchLogo: {
    // color:'white',
    height: hp('2.4%'),
    width: wp('4.5%'),
    marginTop: hp('1.4%'),
    marginLeft: hp('1.2%'),
  },
  txtt: {
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: 'white',
    marginLeft: hp('1.8%'),
    marginTop: hp('1.4%'),
  },
})