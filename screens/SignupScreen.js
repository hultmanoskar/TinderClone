import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const SignupScreen = () => {

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
        <TouchableOpacity style={styles.touchableText}>
    <Text>Sign up & get matches today</Text>
    </TouchableOpacity>
     </ImageBackground>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
topView:{
flex: 1,
},

imgBackground: {
  resizeMode: 'cover',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
  
},
touchableText:{
  padding: 12,
  backgroundColor: 'white',
  borderRadius: 12,
  alignSelf: 'center', 
  marginTop: '85%', 
}
})