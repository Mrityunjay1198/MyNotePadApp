import React,{useContext} from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
import {NotesContent} from '../content/NotesContent'
import {AntDesign,Entypo} from '@expo/vector-icons'
import {FAB} from 'react-native-paper'

const ListNotesScreens = ({navigation})=>{
    const {state,dispatch} = useContext(NotesContent)
    return(
        <View style={{flex:1}}>
            
            <FlatList 
            data={state}
            keyExtractor={item=>item.title}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity
                    
                    onPress={()=>navigation.navigate("Show",{id:item.id})}
                    >
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginHorizontal:6,
                        marginTop:5,
                        elevation:4,
                        backgroundColor:'white',
                        padding:10,
                        height:80,
                        borderRadius:8
                    }}>
                        <View style={{flexDirection:'column'}} >
                        <Text style={{fontSize:15,margin:2}}>{item.notedate}</Text>
                        <Text style={{fontSize:22}}>{item.title}</Text>
                        </View>
                        <Entypo name='trash' 
                        size={24} 
                        color='#ff2b2b'
                        onPress = {()=>dispatch({type:"REMOVE",payload:item.id})}
                        />
                    </View>
                    </TouchableOpacity>
                )
            }
        }
            />
             <FAB
             onPress={()=>navigation.navigate("Create")}
             label='New'
             color='white'
                style={{
                    position:'absolute',
                    right:0,
                    bottom:0,
                    margin:20,
                    backgroundColor:'orange'
                }}
                >+</FAB>
        </View>
    )
}

export default ListNotesScreens