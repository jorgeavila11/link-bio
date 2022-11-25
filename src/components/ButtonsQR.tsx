import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

function ButtonsQR() {
    const [qrValue, setQrValue] = useState('');

    return (
        
        <SafeAreaView style={{ flex: 1}}>
            
            <View style={styles.containerQr}>
                
                <QRCode
                    value={qrValue ? qrValue : "NA"}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                    logoBackgroundColor="yellow"
                />
                <View style={{ margin: 30 }}>
                    <TouchableOpacity style={styles.button} >
                        <Button 
                            title="Twitter"
                            color="#00ACEE"
                        ></Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Button 
                            title="Facebook"
                            color="#3B5998"
                        ></Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Button 
                            title="Instagram"
                            color="#8A3AB9"
                        ></Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} >
                        <Button 
                            title="WhatsApp"
                            color="#128C7E"
                        ></Button>
                    </TouchableOpacity>
                </View>
            </View> 
            
        </SafeAreaView>
        
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
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
    },
    textInput: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        margin: 10,
        borderWidth: 1,
    },
    button:{
        height: 40, 
        marginTop: 10, 
        width:300,       
    },  
});

export default ButtonsQR