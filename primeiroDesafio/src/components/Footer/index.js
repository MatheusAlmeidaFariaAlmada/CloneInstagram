import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Base = () => {
    const navigation = useNavigation();

    return (
            <View style={styles.cabecalho}>
                <View style={styles.posicaoLogo}>
                   
                    <View style={styles.posicaoicones}>
                        
                        <Image
                            source={require('../../assets/casa.png')}
                            style={styles.casa}
                        />

                        <Image
                            source={require('../../assets/lupa.png')}
                            style={styles.lupa}
                        />

                        <Image
                            source={require('../../assets/reels.png')}
                            style={styles.reels}
                        />

                        <Image
                            source={require('../../assets/compras.png')}
                            style={styles.compras}
                        />

                        <Image
                            source={require('../../assets/1.jpg')}
                            style={{ width: 30, height: 30, borderRadius: 400 / 2, margin: 2, borderWidth: 3 }} 
                        />
                            
                    </View>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
 
    logo: {
        width: 100,
        height: 40,
    },
    posicaoLogo: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        padding: 10
    },
    cabecalho: {
        backgroundColor: '#FFF',
        position: "absolute",
        bottom: 0
    },
    posicaoicones: {
        flexDirection: 'row',
    },
    compras: {
        width: 45,
        height: 40,
        margin: 0,
        marginRight: 40,
        marginLeft: 10
    },
    reels:{
        width: 45,
        height: 40,
        margin: 0,
        marginRight: 25,
    },
    lupa: {
        width: 45,
        height: 40,
        margin: 0,
        marginRight: 35,
        marginLeft: 20
    },
    casa: {
        width: 45,
        height: 40,
         margin: 0,
         marginRight: 20
    }
});