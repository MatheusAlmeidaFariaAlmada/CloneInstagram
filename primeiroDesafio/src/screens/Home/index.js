import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Topo } from '../../components/Header';
import { Story } from '../../components/Story/story';
import { Base } from '../../components/Footer';

export const Home = () => {
    const navigation = useNavigation();

    return (
        <>
            <Topo />
            <View>
                <ScrollView>
                    <Story />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/3.jpg')}
                                    style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderColor: '#E95651', borderWidth: 3 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: "bold", top: 10, fontSize: 15 }}>Odin</Text>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/3pontos.png')}
                                    style={{ width: 40, height: 40, margin: 7, left: 260 }} />
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../../assets/paisagem.jpg')}
                            style={{ width: 390, height: 280, margin: 1, borderWidth: 3 }} />

                        <View style={styles.tudo}>
                            <View style={styles.posicaoicones}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/coracao.png')}
                                        style={styles.publicar}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/conversa.png')}
                                        style={styles.conversa}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/aviao.png')}
                                        style={styles.aviao}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.posicaoicones2}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/marcacao.png')}
                                        style={styles.publicar}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>Curtido por </Text>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>Freed </Text>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>e </Text>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>outras pessoas</Text>
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>Odin </Text>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>Dia e lugar perfeito para correr e brincar.</Text>
                        </View>

                        <Text style={{ left: 10, color: 'blue', fontSize: 15 }}> #Brincar #Diaperfeito #Lugarperfeito</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/1.jpg')}
                                    style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderWidth: 3 }} />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: "bold", top: 15, fontSize: 15 }}>Adicione um coment??rio...</Text>
                            <Image
                                source={require('../../assets/emogi.png')}
                                style={{ width: 70, height: 40, margin: 7, borderWidth: 3, left: 70 }} />
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ color: 'black', fontSize: 11, margin: 1, left: 10 }}>H?? 4 horas </Text>
                        </View>
                        <Text></Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/4.jpg')}
                                    style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderColor: 'gray', borderWidth: 1 }} />
                            </TouchableOpacity>

                            <Text style={{ color: 'black', fontWeight: "bold", top: 10, fontSize: 15 }}>Alex</Text>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/3pontos.png')}
                                    style={{ width: 40, height: 40, margin: 7, left: 260 }} />
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../../assets/brinquedo.jpg')}
                            style={{ width: 390, height: 280, margin: 1, borderWidth: 3 }} />

                        <View style={styles.tudo}>
                            <View style={styles.posicaoicones}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/coracao.png')}
                                        style={styles.publicar}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/conversa.png')}
                                        style={styles.conversa}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/aviao.png')}
                                        style={styles.aviao}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.posicaoicones2}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/marcacao.png')}
                                        style={styles.publicar}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>Curtido por </Text>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>Laila </Text>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>e </Text>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>outras pessoas</Text>
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>Alex </Text>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>Meu irm??o e seu brinquedo novo.</Text>
                        </View>

                        <Text style={{ left: 10, color: 'blue', fontSize: 15 }}> #Irm??o #Brinquedo #Correr </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/1.jpg')}
                                    style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderWidth: 3 }} />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: "bold", top: 15, fontSize: 15 }}>Adicione um coment??rio...</Text>
                            <Image
                                source={require('../../assets/emogi.png')}
                                style={{ width: 70, height: 40, margin: 7, borderWidth: 3, left: 70 }} />
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ color: 'black', fontSize: 11, margin: 1, left: 10 }}>H?? 12 horas </Text>
                        </View>
                        <Text></Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/2.jpg')}
                                    style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderColor: '#E95651', borderWidth: 3 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: "bold", top: 10, fontSize: 15 }}>Laila</Text>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/3pontos.png')}
                                    style={{ width: 40, height: 40, margin: 7, left: 260 }} />
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../../assets/esquilo.jpg')}
                            style={{ width: 390, height: 280, margin: 1, borderWidth: 3 }} />

                        <View style={styles.tudo}>
                            <View style={styles.posicaoicones}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/coracao.png')}
                                        style={styles.publicar}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/conversa.png')}
                                        style={styles.conversa}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/aviao.png')}
                                        style={styles.aviao}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.posicaoicones2}>

                                <TouchableOpacity>
                                    <Image
                                        source={require('../../assets/marcacao.png')}
                                        style={styles.publicar}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>Curtido por </Text>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>Freed </Text>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>e </Text>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>outras pessoas</Text>
                        </View>

                        <View style={styles.texto}>
                            <Text style={{ left: 10, color: 'black', fontWeight: "bold", fontSize: 15 }}>Laila </Text>
                            <Text style={{ left: 10, color: 'black', fontSize: 15 }}>Esquilo !!!!!!!</Text>
                        </View>

                        <Text style={{ left: 10, color: 'blue', fontSize: 15 }}> #Pega #Esquilo</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/1.jpg')}
                                    style={{ width: 40, height: 40, borderRadius: 400 / 2, margin: 7, borderWidth: 3 }} />
                            </TouchableOpacity>
                            <Text style={{ fontWeight: "bold", top: 15, fontSize: 15 }}>Adicione um coment??rio...</Text>
                            <Image
                                source={require('../../assets/emogi.png')}
                                style={{ width: 70, height: 40, margin: 7, borderWidth: 3, left: 70 }} />
                        </View>

                        <View style={styles.texto1}>
                            <Text style={{ color: 'black', fontSize: 11, margin: 1, left: 10 }}>H?? 15 horas </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
            <Base />
        </>
    )
}

const styles = StyleSheet.create({
    aviao: {
        width: 35,
        height: 35,
        margin: 3
    },

    conversa: {
        width: 35,
        height: 35,
        margin: 3
    },

    publicar: {
        width: 35,
        height: 35,
        margin: 3
    },
    posicaoicones: {
        width: '50%',
        flexDirection: 'row',
    },
    posicaoicones2: {
        width: '50%',
        alignItems: 'flex-end'
    },
    tudo: {
        flexDirection: 'row',
    },
    texto: {
        flexDirection: 'row',
    },
    texto1: {
        flexDirection: 'row',
        paddingBottom: 120
    },
});