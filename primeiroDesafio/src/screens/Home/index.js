import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Topo } from '../../components/Header';
import { Story } from '../../components/Story/story';
import { Base } from '../../components/Footer';

export const Home = () => {
    const navigation = useNavigation();

    return (
       <>
            <Topo />
            <Story />
            <View>
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/3.jpg')}
                                style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderWidth: 3 }} />
                            <Text style={{ color: 'black', fontWeight: "bold", top: 10, fontSize: 15 }}>Odin</Text>
                        </View>
                        <Image
                            source={require('../../assets/paisagem.jpg')}
                            style={{ width: 390, height: 280, margin: 1, borderWidth: 3 }} />

                        <View style={styles.tudo}>
                            <View style={styles.posicaoicones}>
                            
                                <Image
                                    source={require('../../assets/coracao.png')}
                                    style={styles.publicar}
                                />

                                <Image
                                    source={require('../../assets/conversa.png')}
                                    style={styles.conversa}
                                />

                                <Image
                                    source={require('../../assets/aviao.png')}
                                    style={styles.aviao}
                                />
                            </View>

                            <View style={styles.posicaoicones2}>
                            
                                <Image
                                    source={require('../../assets/marcacao.png')}
                                    style={styles.publicar}
                                />

                            </View>
                        </View>

                    </View>

                    
                </ScrollView>
            </View>
            <Base/>
        </>
    )
}

const styles = StyleSheet.create({
    aviao: {
        width: 30,
        height: 30,
        margin: 3
    },

    conversa: {
        width: 35,
        height: 30,
        margin: 3
    },
  
    publicar: {
        width: 35,
        height: 30,
        margin: 3
    },
    posicaoicones: {
        width: '50%',
        flexDirection: 'row',
    },
    posicaoicones2:{
        width: '50%',
        alignItems: 'flex-end'
    },
    tudo:{
        flexDirection: 'row',
    }
});