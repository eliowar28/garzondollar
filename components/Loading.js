import React from 'react';
import{ ActivityIndicator } from 'react-native'


const Loading = ({isLoading})=> {
    if(isLoading){
        return (<><ActivityIndicator size="large" color="red" /></>)
    } else {
        return (<></>)
    }
   
}

export default Loading;
