import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import {NotesContent} from '../content/NotesContent'
import {AntDesign} from '@expo/vector-icons'
import {FAB,Card} from 'react-native-paper'

const ShowNote = ({route,navigation})=>{
    const {id} = route.params
    const {state} = useContext(NotesContent)
    const note =  state.find((record)=>{
        return record.id === id
    })
    return(
        <View style={{flex:1}}>
        <View>
            <Text style={styles.mytitle}> {note.title} </Text>
            <Text style={{textAlign:'center'}}>11 June 2020 | 11:20 AM</Text>
        <Card style={{marginTop:10,marginHorizontal:5}}>
            <View style={{padding:10}} >
                <Text style={styles.mycontent}> { note.content } </Text>
            </View> 
        </Card>
            
        </View>
        <FAB
             onPress={()=>navigation.navigate("Edit",{id})}
              color='white'
              label='edit'
                 style={{
                    position:'absolute',
                    right:0,
                    bottom:0,
                    margin:20,
                    backgroundColor:'orange'
                }}
                ><AntDesign icon='edit' /></FAB>
        </View>
    )
}

const styles = StyleSheet.create({
    mytitle:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:10
    },
    mycontent:{
     fontSize:18,
    // textAlign:'left',
     //padding:10
     
    }
})

export default ShowNote