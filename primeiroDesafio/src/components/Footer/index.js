import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Base = () => {
    const navigation = useNavigation();

    return (
            <View style={styles.cabecalho}>
                <View style={styles.posicaoLogo}>
                   
                    <View style={styles.posicaoicones}>
                        
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/casa.png')}
                                style={styles.casa}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/lupa.png')}
                                style={styles.lupa}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/reels.png')}
                                style={styles.reels}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/compras.png')}
                                style={styles.compras}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/1.jpg')}
                                style={{ width: 30, height: 30, borderRadius: 400 / 2, margin: 2, borderWidth: 3 }} 
                            />
                        </TouchableOpacity>    
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
        bottom: 0,
        width: '100%'
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