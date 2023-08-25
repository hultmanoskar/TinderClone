import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {

  const navigation = useNavigation();

useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false
  });
}, []);

  return (
    <View style={styles.topView}>
     <ImageBackground style={styles.imgBackground}
      source={{uri: "https://tinder.com/static/tinder.png"}}>
        <TouchableOpacity style={styles.touchableText}
        onPress={() => {
          navigation.navigate("Home")
        }}
        >
    <Text>Login & start swiping</Text>
    </TouchableOpacity>
     </ImageBackground>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
topView:{
flex: 1,
},

imgBackground: {
  resizeMode: 'cover',
  flex: 1,
  
  
},
touchableText:{
  padding: 12,
  backgroundColor: 'white',
  borderRadius: 12,
  alignSelf: 'center',
  position: 'absolute',
  bottom: 160


}
})