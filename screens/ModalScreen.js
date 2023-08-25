import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, Ionicons, FontAwesome} from '@expo/vector-icons'




const ModalScreen = ({ route }) => {
  const onAddProfile = route.params?.onAddProfile;

const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [id, setId] = useState('');
  
  

  const handleAddProfile = () => {
    const newProfile = {
      firstName,
      lastName,
      job,
      age,
      city,
      id
    };
    onAddProfile(newProfile);

    navigation.goBack();

    setFirstName('');
    setLastName('');
    setJob('');
    setAge('');
    setCity('');
    setId('');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', top: 40}}>
      <View style={{flexDirection: 'row', alignItems: 'center',}}>
      <Image style={{height: 40,
    width: 40,
    borderRadius: 40/2,}} source={require('../assets/tinder-logo.png')}/>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tinder Clone</Text>
      </View>
      <View style={{top: 20, alignItems: 'center'}}>

      
      <Text style={{fontSize: 18, marginBottom: 8, fontWeight: '500'}}>This is my Tinder Clone</Text>
      
      <Text style={{fontSize: 14, fontWeight: '400'}}>Some stupid fuctionality below,</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{fontSize: 14, marginHorizontal: 4, fontWeight: '400'}}>add a profile and swipe on it!</Text>
      <AntDesign name='rest' size={18} style={{fontWeight: '400'}} /> 
      </View>
      </View>
      <View style={{top: 40, alignItems: 'center'}}>
      <TextInput
        placeholder="First Name:"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name:"
        value={lastName}
        onChangeText={setLastName}
      />

<TextInput placeholder="Job:" value={job} onChangeText={setJob} />
      <TextInput placeholder="Age:" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput placeholder="City:" value={city} onChangeText={setCity} />
      <TextInput placeholder="Id:" value={id} onChangeText={setId} keyboardType="numeric"/>
    
      <TouchableOpacity
      style={{padding: 14, borderRadius: 24, backgroundColor: '#FF5864', alignItems: 'center', justifyContent: 'center', top: 20}} 
      onPress={()=> {
        handleAddProfile();
      }}>
        <Text style={{color: 'white'}}>Add Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default ModalScreen