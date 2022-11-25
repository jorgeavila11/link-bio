import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Button } from 'react-native'
import ButtonsQR from '../components/ButtonsQR'
import Buttons from './Buttons'
import FormCadastro from './FormCadastro'

function Home({navigation}) {
    return (
        <View>
            <View style={style.text}>
            <Text onPress={() => navigation.navigate('Formulario de Cadastro')} >Editar</Text>
            </View>            
            {/* <View style={style.text}>
                <Button
                    title="Editar"
                    onPress={() => navigation.navigate('Formulario de Cadastro')}
                />
            </View> */}
            <View style={{marginTop:300}}>                
                <ButtonsQR />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        marginTop: 50, 
        marginBottom:-90,
        marginLeft:200,                
        alignItems: 'center', 
        justifyContent: 'center' 
    }

})

export default Home