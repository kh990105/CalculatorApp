import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import  Icon1  from 'react-native-vector-icons/MaterialCommunityIcons'

const Display = () => {
  const [Darkmode, setMode] = useState(true);
  const change = () => setMode(!Darkmode);  

  return (
    <View style={Darkmode? light.container:dark.container}>        
        <View style={light.displayContainer}>
            <Pressable onPress={change}>
                <Icon1 name={ Darkmode?"toggle-switch-outline":"toggle-switch-off-outline"} size={60} color={Darkmode? 'black':'white'}/>
            </Pressable>
            <View style={light.TextBox}>
                <Text style={light.firstText}>1,345.0</Text>
            </View>
            <View style={light.TextBox}>
                <Text style={light.secondText}>1,345.0</Text>
            </View>
        </View>
        <View style={light.btnContainer}>
            <View style={light.rowContainer}>
                <TouchableOpacity style={light.bkBtn}>
                    <Text style={light.whiteText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={light.bkBtn}>
                    <Text style={light.whiteText}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={light.bkBtn}>
                    <Text style={light.whiteText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={light.blueBtn}>
                    <Text style={light.whiteText}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={light.rowContainer}>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={light.blueBtn}>
                    <Text style={light.whiteText}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={light.rowContainer}>
            <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={light.blueBtn}>
                    <Text style={light.whiteText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={light.rowContainer}>
            <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={light.blueBtn}>
                    <Text style={light.whiteText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={light.rowContainer}>
            <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Text style={light.blackText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Darkmode? light.whiteBtn: dark.DarkBtn}>
                    <Icon name="erase" size={30} color="#888"/>
                </TouchableOpacity>
                <TouchableOpacity style={light.blueBtn}>
                    <Text style={light.whiteText}>=</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
  )
}



const btn = {
    marginRight: 20,
    width:70,
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
}

const text = {
    fontSize:30,
    fontWeight: '400'
}

const dark = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        marginTop: 20,
        alignItems:'center'
    },
    DarkBtn:{
        backgroundColor: '#2e2f38',
        ...btn
    },
})

const light = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f3',
        width: '100%',
        height: '100%',
        marginTop: 20,
        alignItems:'center'
    },
    displayContainer:{
        width:350,
        height:250,
        alignItems:'center',
        justifyContent:'center'
    },
    TextBox:{
        alignSelf:'flex-end',
        marginTop:10,
        marginBottom:10
    },
    firstText:{
        fontSize:30,
        fontWeight:'400',
        color:'#888888'
    },
    secondText:{
        fontSize:80,
        fontWeight:'300',
        color:'#797979'
    },
    btnContainer:{
       // backgroundColor: '#eee',
        width: 350,
        height: 400,
        marginTop: 5,
    },
    rowContainer:{
        height: 70,
        display: 'flex',
        flexDirection:'row',
        marginBottom:11
    },
    bkBtn:{
        backgroundColor:'#4e505f',
        ...btn
    },
    blueBtn:{
        backgroundColor:'#4b5efc',
        ...btn
    },
    whiteBtn:{
        backgroundColor: '#fff',
        ...btn
    },
    whiteText:{
        color: 'white',
        ...text
    },
    blackText:{
        color: '#000',
        ...text
    }
});

export default Display