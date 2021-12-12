import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Topo = () => {
    const navigation = useNavigation();

    return (
            <View style={styles.cabecalho}>
                <View style={styles.posicaoLogo}>
                    <View style={styles.posicaoInsta}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                    />
                    </View>
                    <View style={styles.posicaoicones}>
                        
                        <Image
                            source={require('../../assets/publicar.png')}
                            style={styles.publicar}
                        />

                        <Image
                            source={require('../../assets/coracao.png')}
                            style={styles.coracao}
                        />

                        <Image
                            source={require('../../assets/aviao.png')}
                            style={styles.aviao}
                        />
                    </View>
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
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
        height: '7%'
    },
    posicaoicones: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    aviao: {
        width: 35,
        height: 35,
        margin: 7
    },

    coracao: {
        width: 35,
        height: 35,
        margin: 7
    },
  
    publicar: {
        width: 35,
        height: 30,
         margin: 8
    },
    posicaoInsta: {
        width: '60%',
        justifyContent: 'center'
    }
});