import React from 'react'
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native'

function Buttons() {
  return (
    <View>
        <View>
            <TouchableOpacity style={style.button}>
                <Button 
                    title="Twitter"
                    color="#00acee" 
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    button:{
        height: 40, 
        marginTop: 10, 
        width:300,       
    }
})

export default Buttons