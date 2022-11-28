import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native'

function FormCadastro({navigation}) {


    const [textTwitter, settextTwitter] = useState('');
    const [textFacebook, settextFacebook] = useState('');
    const [textInstagram, settextInstagram] = useState('');
    const [textWhatsApp, settextWhatsApp] = useState('');

    const imprimir = () =>{
        console.log(textTwitter)
        console.log(textFacebook)
        console.log(textInstagram)
        console.log(textWhatsApp)
    }
    return (        
        <View style={styles.container}>                        
            <Text style={styles.text}>URL Twitter:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(textTwitter) => settextTwitter(textTwitter)}
                value={textTwitter}
                placeholder="Sua url do Twitter aqui"
            />
            <Text style={styles.text}>URL Facebook:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(textFacebook) => settextFacebook(textFacebook)}
                value={textFacebook}
                placeholder="Sua url do Facabook aqui"
            />
            <Text style={styles.text}>URL Instagran:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(textInstagran) => settextInstagram(textInstagran)}
                value={textInstagram}
                placeholder="Sua url do Instagran aqui"
            />
            <Text style={styles.text}>URL WhatsApp:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(textWhatsApp) => settextWhatsApp(textWhatsApp)}
                value={textWhatsApp}
                placeholder="Sua url do WhatsApp aqui"
            />                       
            <TouchableOpacity style={styles.button} >
                <Button
                 title="Voltar" 
                 onPress={() => navigation.navigate('Home',{twitter:textTwitter,facebook:textFacebook,instagram:textInstagram,whatsapp:textWhatsApp})}
                ></Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerQr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft:50
    },
    text: {
        fontSize: 15,
        marginTop: 10,
        // textAlign: 'center',
        // margin: 5,
    },
    textInput: {
        flexDirection: 'row',
        width: 300,
        height: 40,
        marginTop: 10,        
        marginRight: 10,        
        borderWidth: 1,
        padding:10,
        backgroundColor:'#fff'
    },
    button: {
        height: 40,
        marginTop: 20,
        width: 300,
    },
   

});


export default FormCadastro