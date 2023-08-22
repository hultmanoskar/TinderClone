import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo, Ionicons} from '@expo/vector-icons'


const HomeScreen = () => {
const navigation = useNavigation();



  return (
    <SafeAreaView style={{}}>
        {/* Header */}

<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, padding: 4}}>
<TouchableOpacity>
  <Image style={styles.smallImg} source={require('../assets/rihanna.jpg')}/>
</TouchableOpacity>
<TouchableOpacity>
  <Image style={styles.logoImg} source={require('../assets/tinder-logo.png')}/>
</TouchableOpacity>

<TouchableOpacity>
  <Ionicons name='chatbubbles-sharp' size={30} color="#FF5864" style={styles.chatIcon}/>
</TouchableOpacity>
</View>


        {/* End of Header */}

     {/*  <Text>HomeScreen</Text>
  <Button title="Go to chat" onPress={() => navigation.navigate("Chat")} /> */}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  smallImg: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
  },
  logoImg:{
    height: 40,
    width: 40,
    borderRadius: 40/2,
  },
  
})