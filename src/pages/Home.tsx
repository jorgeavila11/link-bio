import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Button } from 'react-native'
import ButtonsQR from '../components/ButtonsQR'
import Buttons from './Buttons'
import FormCadastro from './FormCadastro'

const Home = ({navigation,route}) => {

    const twitter = route.params?.twitter
    const facebook = route.params?.facebook
    const instagram = route.params?.instagram
    const whatsapp = route.params?.whatsapp


    return (
        <View>
            <View style={style.text}>
            <Text onPress={() => navigation.navigate('Formulario de Cadastro')} >Editar</Text>
            {/* <Text>Twitter: {twitter}</Text> 
            <Text>Twitter: {facebook}</Text> 
            <Text>Twitter: {instagram}</Text> 
            <Text>Twitter: {whatsapp}</Text>  */}
            </View>
                       
            {/* <View style={style.text}>
                <Button
                    title="Editar"
                    onPress={() => navigation.navigate('Formulario de Cadastro')}
                />
            </View> */}
            <View style={{marginTop:300}}>                
                <ButtonsQR twitter={twitter} facebook={facebook} instagram={instagram} whatsapp={whatsapp} />
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