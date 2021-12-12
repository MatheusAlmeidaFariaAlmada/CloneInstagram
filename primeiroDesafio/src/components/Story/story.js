import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Story = () => {
    const navigation = useNavigation();

    return (
        <>
        <View style={{height:120, borderBottomColor: '#E8E8E8', borderBottomWidth: 1}}>

            <View style={{flex: 3,  flexDirection: 'row',}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems:'center',
                    paddingStart: 5,
                    paddingEnd: 5
                }}
              >
                <View>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/1.jpg')}
                        style={{width: 75, height: 75, borderRadius: 400/ 2, margin:7, borderColor: '#E95651', borderWidth: 3}}/>
                    </TouchableOpacity>
                    <Text style={{left: 15, color: 'black', fontWeight: "bold"}}>Seu story</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/2.jpg')}
                        style={{width: 75, height: 75, borderRadius: 400/ 2, margin:7, borderColor: '#E95651', borderWidth: 3}}/>
                    </TouchableOpacity>
                    <Text style={{left: 30, color: 'black', fontWeight: "bold"}}>Laila</Text>
                </View>
          
                <View>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/3.jpg')}
                        style={{width: 75, height: 75, borderRadius: 400/ 2, margin:7, borderColor: '#E95651', borderWidth: 3}}/>
                        </TouchableOpacity>
                    <Text style={{left: 30, color: 'black', fontWeight: "bold"}}>Odin</Text>
                </View>
       
                <View>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/5.jpeg')}
                        style={{width: 75, height: 75, borderRadius: 400/ 2, margin:7, borderColor: '#E95651', borderWidth: 3}}/>
                    </TouchableOpacity>
                    <Text style={{left: 32, color: 'black', fontWeight: "bold"}}>Fred</Text>
                </View>
       
                <View>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/6.jpg')}
                        style={{width: 75, height: 75, borderRadius: 400/ 2, margin:7, borderColor: '#E95651', borderWidth: 3}}/>
                    </TouchableOpacity>
                    <Text style={{left: 25, color: 'black', fontWeight: "bold"}}>Brenda</Text>
                </View>

                </ScrollView>
              
              
            </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:7
    }
});