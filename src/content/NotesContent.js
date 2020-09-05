import React, {createContext,useReducer} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {reducer as NotesReducer,initialState} from '../reducer/NotesReducer'

export const NotesContent = createContext()

export const NotesProvider = ({children})=>{
    const [state,dispatch] = useReducer(NotesReducer,initialState)
    return(
        <NotesContent.Provider value={{state,dispatch}}>
            {children}
        </NotesContent.Provider>
    )
}