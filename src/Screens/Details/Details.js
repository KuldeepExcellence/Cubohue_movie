import { StyleSheet, Text, View,Image ,ScrollView} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Cast from '../Castandcrew/Cast';
import Trailer from '../Trailer/Trailer';
import Discover from '../Discover/Discover';
import { URL } from '../../Components/Baseurl/BaseUrl';

const Tab = createMaterialTopTabNavigator();
const Details = ({navigation,route}) => {

  const {item}=route.params
  console.log(item,'item')
  
  return (
    <>
    <ScrollView >
    <View style={styles.main}>
          <Image source={{ uri: URL + item.poster_path}} style={{  width: wp('100%'), height:hp('60%')}} />
      <View style={styles.maintxt}>
      <Text style={styles.txt}>{item.name}</Text>
      <Text style={styles.txtdate}>{item.first_air_date}</Text>
      <Text style={styles.txthr}>2h 2m PG-13</Text>
      <Text style={styles.txtdis}>{item.overview}</Text>
    <View style={styles.mainact}>
        <View style={styles.actimain}>
     <Text style={styles.txtac}>Action</Text>
     </View>
     <View style={styles.crmain}>
      <Text style={styles.txtcr}>Crime</Text>
      </View>
      <View style={styles.thmain}>
      <Text style={styles.txtth}>Thriller</Text>
      </View>
      </View>
      <View style={styles.mainstatus}>
      <Text style={styles.txtsta}>Status: In Production</Text>
      </View>
    </View>
  
    <Tab.Navigator
  
    screenOptions={{
        // swipeEnabled={{false}},
      tabBarActiveTintColor: 'white',
      tabBarIndicatorStyle: {
        backgroundColor: 'white',
        height: 2,
        width: wp('42%')
      },
      tabBarItemStyle: {
        backgroundColor: '#1a1a1a',
        width: wp('33%'),
        // borderRadius: 10,
      },
     
      tabBarLabelStyle: { fontSize: hp('2.1%') },
      tabBarStyle: {
        height: 45,
        backgroundColor: '#1a1a1a',
      },
    }}
  >
    <Tab.Screen
      name="Cast & Crew" component={Cast} />
    <Tab.Screen name="Trailer" component={Trailer} />
    <Tab.Screen name="Discover" component={Discover} />
  </Tab.Navigator>
 
    </View>
    </ScrollView>
    </>
  )
}

export default Details

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'black',
    },
    txt:{
        color:'white',
      fontSize:hp('2.9%'),
    },
    maintxt:{
        padding:14,
    },
    txtdate:{
        color:'#737373',
    },
    txthr:{
        color:'#737373',
    },
    txtdis:{
        color:'white',
        fontSize:hp('2.2%'),
    },
    mainact:{
        flexDirection:'row',
    },
    txtac:{
        color:'white',
       
    },
    txtcr:{
        color:'white',
    },
    txtth:{
        color:'white',
    },
    actimain:{
        borderRadius: 14,
        backgroundColor:'#666666',
       
        height:hp('3.5%'),
        width:wp('13.8%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('1.1%'),
        
    },
    crmain:{
        borderRadius: 14,
        backgroundColor:'#666666',
        height:hp('3.5%'),
        width:wp('13.8%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('1.1%'),
        marginLeft: hp('1.1%'),
    },
    thmain:{
        borderRadius: 14,
        backgroundColor:'#666666',
        height:hp('3.5%'),
        width:wp('14.9%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('1.1%'),
        marginLeft: hp('1.1%'),
    },
    txtsta:{
        color:'white'
      
    },
    mainstatus:{
        padding:14,
        marginLeft: hp('-1.1%'),
    },
})