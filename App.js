import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ListNotesScreens from './src/screens/ListNotesScreens'
import {NotesProvider} from './src/content/NotesContent'
import CreateNoteScreen from './src/screens/CreateNoteScreen'
import ShowNote from './src/screens/ShowNotesScreen'
import EditNotesScreen from './src/screens/EditNotesScreen'
import { color } from 'react-native-reanimated'


const Stack = createStackNavigator()

const myoptions={
  title:"My Notes",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"orange"
  }
}

function App( ) {
  
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen 
         name="Notes" 
         component={ListNotesScreens}
         options={ myoptions }
         />
         <Stack.Screen 
         name="Create" 
         component={CreateNoteScreen}
         options={{ ...myoptions,title:'Create Note' }}
         />
         <Stack.Screen 
         name="Show" 
         component={ShowNote}
         options={{ ...myoptions,title:'Note' }}
         />
         <Stack.Screen 
         name="Edit" 
         component={EditNotesScreen}
         options={{ ...myoptions,title:'Edit Note' }}
         />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

export default ()=>{
  return(
  <NotesProvider>
    <App/>
  </NotesProvider>    
  )
}
 
