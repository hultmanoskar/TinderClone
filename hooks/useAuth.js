import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as AuthSession from 'expo-auth-session';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

const signInWithGoogle = async() => {
  
}

  return (
    <AuthContext.Provider 
    value={{ 
user: "Ogge"

    }}>
      {children}
      </AuthContext.Provider>
  );
};

export default function useAuth() {
    return useContext(AuthContext);
}