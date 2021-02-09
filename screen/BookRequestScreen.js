import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../Components/MyHeader'

export default class BookRequestScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userId: firebase.auth().currentUser.email,
            bookName: '',
            reasonToRequest: ''
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addRequest=(bookName, reasonToRequest)=>{
        var userId= this.state.userId;
        var randomRequestId= this.createUniqueId();
        db.collection('requested_books').add({
            'user_id': userId,
            'book_name': bookName,
            'reason_to_request': reasonToRequest,
            'request_id': randomRequestId
        })

        this.setState({
            bookName:'',
            reasonToRequest:''
        })
        return alert('book successfully requested!')
    }

    render(){
        return(
            <View style={{flex:1}}>
                <KeyboardAvoidingView style={StyleSheet.keyboardStyle}>
                <TextInput style={styles.formTextInput} placeholder={'Enter Book Name'}
                onChangeText={(text)=>{
                    this.setState({
                        bookName: text
                    })
                }}
                value={this.state.bookName}
                />

            <TextInput style={[styles.formTextInput, {height: 300}]} placeholder={'Why do need the book?'}
                onChangeText={(text)=>{
                    this.setState({
                        reasonToRequest: text
                    })
                }}
                value={this.state.reasonToRequest}
                />

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.addRequest(this.state.bookName, this.state.reasonToRequest)
                }}>
                    <Text>Request</Text>
                </TouchableOpacity>


            
                </KeyboardAvoidingView>
            </View>

            
        )
    }
}

const styles=StyleSheet.create({
    keyboardStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    formTextInput:{
        width:'75%',
        height: 35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8
        },

        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:60

    },

})