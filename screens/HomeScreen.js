import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo, Ionicons} from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'

const RANDOM_DATA = [
  {
    firstName: "Ogge",
    lastName: "Hult",
    job: "Mobile dev",
    age: 24,
    profilePic: "https://www.sportsnet.ca/wp-content/uploads/2014/11/thierry_henry720.jpg",
    id:123
  },
  {
    firstName: "Rihanna",
    lastName: "",
    job: "Artist",
    age: 30,
    profilePic: "https://www.sportsnet.ca/wp-content/uploads/2014/11/thierry_henry720.jpg",
    id:456
  }
];


const HomeScreen = () => {
const navigation = useNavigation();



  return (
    <SafeAreaView style={{flex: 1}}>
        {/* Header */}

<View style={styles.topView}>
<TouchableOpacity>
  <Image style={styles.smallImg} source={require('../assets/rihanna.jpg')}/>
</TouchableOpacity>
<TouchableOpacity>
  <Image style={styles.logoImg} source={require('../assets/tinder-logo.png')}/>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate("Chat")} >
  <Ionicons name='chatbubbles-sharp' size={30} color="#FF5864" style={styles.chatIcon}/>
</TouchableOpacity>
</View>


        {/* End of Header */}
<View style={styles.swipeView}>
<Swiper
containerStyle={{backgroundColor: "transparent"}}
cards={RANDOM_DATA} 
stackSize={5}
cardIndex={0}
verticalSwipe={false}
renderCard={(card) => (
<View key={card.id} style={styles.cardView}>
    <Image 
    style={styles.cardImg}
    source={{uri: card.profilePic}}
    />
<View style={{backgroundColor: 'white', width: '100%', 
flexDirection: 'row', justifyContent: 'space-between',
 height: '20%', padding: 8,}}> 
  <View> 
    <Text style={{fontSize: 18, fontWeight:'bold' }}>{card.firstName} {card.lastName}</Text>
    <Text>{card.job}</Text>
  </View>
  <Text style={{fontSize: 18, fontWeight:'bold', marginHorizontal: 4 }}>{card.age}</Text>
</View>


  </View>

)}
/>
</View>

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
  topView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 24, 
    padding: 8
  },
  swipeView: {
     flex: 1, margin: 0,
  },
  cardView: {
    backgroundColor: "white",
    flex: 3/4,
    borderRadius: 8,
    overflow: 'hidden', 
  },
  cardImg: {
    flex: 1, // Take up full available space
    width: '100%',
  }
  
})