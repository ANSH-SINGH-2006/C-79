import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../Components/MyHeader'
import {ListItem} from 'react-native-elements'
import { SnapshotViewIOS } from 'react-native';

export default class BookDonateScreen extends React.Component{
    constructor(){
        super()
        this.state={
            requestedBooksList: []
        }

        this.requestRef=null


    }

    getRequestedBooksList=()=>{
        this.requestRef=db.collection("requested_books")
        .onSnapshot((snapshot)=>{
            var requestedBooksList=snapshot.docs.map(document=>document.data())
            console.log(requestedBooksList)
            this.setState({
                requestedBooksList: requestedBooksList
            })
        })
    }

    componentDidMount(){
        this.getRequestedBooksList()
    }
    componentWillUnmount(){
        this.requestRef
    }

    keyExtractor=(item, index)=>index.toString()
    
    renderItem=({item, i})=>{
        return (
            <ListItem 
            key={i}
            title={item.book_name}
            subtitle={item.reason_to_request}
            titleStyle={{color:'black', fontWeight: 'bold'}}
            rightElement= {
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#ffffff'}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }

    render(){

        return(
            <View style={{flex:1, backgroundColor:'black'}}>
                
                <View stlye={{flex:1}}>
                    {
                        this.state.requestedBooksList.length===0
                        ?(
                            <View style={styles.subContainer}>
                                <Text style={{fontSize:20}}>
                                    List of all requested Books...
                                </Text>
                                </View>
                        ):(
                            
                            <FlatList
                            keyExtractor={
                                this.keyExtractor
                            }
                            data={this.state.requestedBooksList}
                            renderItem={this.renderItem}/>
                        )
                    }

                </View>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    subContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:20
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