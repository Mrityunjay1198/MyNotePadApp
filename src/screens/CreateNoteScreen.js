import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import {NotesContent} from '../content/NotesContent'
import { NavigationContainer } from '@react-navigation/native';
const CreateNoteScreen = ({navigation})=>{ 
    function getDate(){
        const monthnames = ["January", "February", "March", "April", "May", "June", 
                            "July","August","September","November", "December"]
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
       var fulldate = date+" "+monthnames[month]+" "+year;
       return fulldate
    }  
    function getTime(){
        var hour = new Date().getHours();
        var min = new Date().getMinutes();
        var fulltime = hour+":"+min;
        return fulltime
    }
    

    const [title,setTitle] = useState("")
    const [content,setContet] = useState("")
    const [notedate,setNoteDate] = useState(getDate()+" "+getTime())
    const {state,dispatch} = useContext(NotesContent)
    return(
        <View style={{flex:1,margin:8}}>
            <TextInput 
            value ={notedate} 
            onChangeText={(text)=>setNoteDate(text)}
            />
            <Text style={{fontSize:20}}>Title</Text>
            <TextInput
            value={title}
            onChangeText={(text)=>setTitle(text)}
            style={style.input}
            />
            <Text style={{fontSize:20}}>Content</Text>
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
                dispatch({type:"ADD",payload:{title,content,notedate}})
                navigation.goBack()
            }}
            >
                <Text style={{fontSize:22,color:'white',textAlign:'center'}}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        fontSize:20,
       // borderWidth:1,
        borderColor:'black',
        marginVertical:8,
        backgroundColor:'white',
        borderRadius:5
    }
})

export default CreateNoteScreen;