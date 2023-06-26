import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from './src/navigation/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { mystore } from './src/redux/store/Store'
import Tvtracker from './src/Screens/Tvtracker/Tvtracker'

const App = () => {
  return (
   <>
      <Provider store={mystore}>

   <NavigationContainer>
   <Tabs/>
  
   </NavigationContainer>
    
   </Provider>
   </>
  )
}

export default App

const styles = StyleSheet.create({})