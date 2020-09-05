import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import {NotesContent} from '../content/NotesContent'
const EditNotesScreen = ({navigation,route})=>{
    const {id} = route.params
    
    const {state,dispatch} = useContext(NotesContent)
    const pertnote =  state.find((record)=>{
        return record.id === id
    })
    const [title,setTitle] = useState(pertnote.title)
    const [content,setContet] = useState(pertnote.content)
    return(
        <View style={{flex:1,margin:8}}>
            <Text style={{fontSize:22,textAlign:'center'}}>Update Title</Text>
            <TextInput
            value={title}
            onChangeText={(text)=>setTitle(text)}
            style={style.input}
            />
            <Text style={{fontSize:22,textAlign:'center'}}>Update Content</Text>
            <TextInput
            value={content}
            onChangeText={(text)=>setContet(text)}
            style={style.input}
            numberOfLines={5}
            multiline={true}
            
            />
            <TouchableOpacity
                style={{
                marginTop:20,
                backgroundColor:'orange',
                padding:10,
                marginHorizontal:50,
                borderRadius:10

            }}
            onPress={()=>{
                dispatch({type:"UPDATE",payload:{id,title,content}})
                navigation.navigate("Notes")
            }}
            >
                <Text style={{fontSize:22,color:'white',textAlign:'center'}}>Update Note</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:'black',
        marginVertical:8
    }
})

export default EditNotesScreen;