import React, {useState} from 'react'
import firebase from 'firebase'
import { createContext } from 'react'
import firebaseConfig from '../config/firebase-keys'
import { set } from 'react-native-reanimated';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    if (!firebase.apps.length) {
        console.log('Connected with Firebase');
        firebase.initializeApp(firebaseConfig);
      }

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <AuthContext.Provider 
            value={{
                user,
                setUser,
                error,
                setError,
                isLoading,
                setIsLoading,
                login: async (email, password) =>{
                    try{
                        await firebase.auth().signInWithEmailAndPassword(email,password)
                    }
                    catch(e){
                        setIsLoading(false)
                        setError(e)
                    }
                },
                register: async (email, password) =>{
                    try{
                        await firebase.auth().createUserWithEmailAndPassword(email,password)
                    }
                    catch(e){
                        console.log(e)
                    }
                },
                logout: async () =>{
                    try{
                        setIsLoading(false);
                        await firebase.auth().signOut()
                    }
                    catch(e){
                        console.log(e)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
