import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo, Ionicons, FontAwesome} from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper'

const RANDOM_DATA = [
  {
    firstName: "Ogge",
    lastName: "Hult",
    job: "Mobile dev",
    age: 28,
    city: "Stockholm",
    profilePic: "https://www.sportsnet.ca/wp-content/uploads/2014/11/thierry_henry720.jpg",
    id:123
  },
  {
    firstName: "Rihanna",
    lastName: "",
    job: "Artist",
    age: 30,
    city: "New York",
    profilePic: "https://www.billboard.com/wp-content/uploads/media/rihanna-diamond-vid-still-2016-billboard-1548.jpg",
    id:456
  }
];


const HomeScreen = () => {
const navigation = useNavigation();
const swipeRef = useRef(null);

useLayoutEffect(() => {


}, [])



  return (
    <SafeAreaView style={{flex: 1}}>
        {/* Header */}

<View style={styles.topView}>
<TouchableOpacity>
  <Image style={styles.smallImg} source={require('../assets/rihanna.jpg')}/>
</TouchableOpacity>
<TouchableOpacity  onPress={()=> navigation.navigate("Modal")}  >
  <Image style={styles.logoImg} source={require('../assets/tinder-logo.png')}/>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate("Chat")} >
  <Ionicons name='chatbubbles-sharp' size={30} color="#FF5864" style={styles.chatIcon}/>
</TouchableOpacity>
</View>


        {/* End of Header */}
<View style={styles.swipeView}>
<Swiper
ref={swipeRef}
containerStyle={{backgroundColor: "transparent"}}
cards={RANDOM_DATA} 
stackSize={4}
cardIndex={0}
verticalSwipe={false}
onSwipedLeft={() => {
  console.log("Swipe PASS")
}}
onSwipedRight={() => {
  console.log("Swipe MATCH")
}}
overlayLabels={{
  left: {
    title: "Nope",
    style: {
      label: {
        textAlign: "right",
        color: "red"
      }
    }
  },
  right: {
    title: "Yes",
    style: {
      label: {
        color: "#4FFFB0"
      }
    }
  }
}}
renderCard={(card) => card ? (
<View key={card.id} style={styles.cardView}>
    <Image 
    style={styles.cardImg}
    source={{uri: card.profilePic}}
    />

  <View style={styles.textOverlay}> 
  <View style={{flexDirection: 'row'}}>
  <Text style={{fontSize: 18, fontWeight:'bold', color: 'white',textShadowColor: 'black', textShadowRadius: 8}}>{card.firstName}, </Text>
  <Text style={{fontSize: 18, fontWeight:'bold',color: 'white',textShadowColor: 'black', textShadowRadius: 8}}> {card.age}</Text>
  </View>
    
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Entypo name='briefcase' size={12} color={'#fafafa'} />
    <Text style={{fontSize: 14, fontWeight: '400',color: '#fafafa', marginHorizontal: 4, textShadowColor: 'black', textShadowRadius: 8}}>{card.job}</Text>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Ionicons name='location-sharp' size={12} color={'#fafafa'} />
    <Text style={{fontSize: 14, fontWeight: '400',color: '#fafafa',marginHorizontal: 4,textShadowColor: 'black', textShadowRadius: 8}}>{card.city}</Text>
    </View>
</View>


  </View> 
) : ( 

      // If cards is empty

  <View style={styles.cardView2}>
   <Entypo name='emoji-sad' size={40} color={'red'}/>
    <Text style={{fontSize: 14, fontWeight: '400'}}>No more profiles...</Text>
  </View>
)}
/>

     {/*Icons row */}

</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: 20 }}>
  <TouchableOpacity style={styles.iconContainer}>
    <FontAwesome name='undo' size={30} color={"#FEBE10"} />
  </TouchableOpacity>

  <TouchableOpacity onPress={()=> swipeRef.current.swipeLeft()}
   style={styles.iconContainer}>
    <Entypo name='cross' size={34} color={'red'} />
  </TouchableOpacity>

  <TouchableOpacity style={styles.iconContainer}>
    <AntDesign name='star' size={30} color={"#007FFF"} />
  </TouchableOpacity>

  <TouchableOpacity onPress={()=> swipeRef.current.swipeRight()} 
  style={styles.iconContainer}>
    <AntDesign name='heart' size={30} color={"#4FFFB0"} />
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.iconContainer}>
    <Ionicons name='flash' size={30} color={'#800080'} />
  </TouchableOpacity>
</View>

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
     flex: 1, bottom: 30,
     
  },
  cardView: {
    backgroundColor: "white",
    flex: 5/6,
    borderRadius: 8,
    overflow: 'hidden', 
    position: 'relative',
    elevation: 2,
  },
  cardImg: {
    flex: 1, // Take up full available space
    width: '100%',opacity:0.9,
    
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 60/2,
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center', // Center the icon horizontally
    width: 60, // Set a fixed width
    height: 60, // Set a fixed height
  },
  textOverlay: {
    position: 'absolute', 
    bottom: 10, 
    left: 10, 
    right: 10, 
    padding: 4, 
    borderRadius: 8, 
    zIndex: 1, 
    shadowColor: 'black',
    shadowRadius: 4,
  },
  cardView2: {
    backgroundColor: "white",
    flex: 5/6,
    borderRadius: 8,
  
elevation: 2,
alignItems: 'center',
justifyContent: 'center'
  },
  
})