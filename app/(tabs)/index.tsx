import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        {/* Flexbox untuk kotak warna-warni */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center', 
            justifyContent: 'flex-end',
          }}
        >
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 100 }} />
          <View style={{ backgroundColor: '#feca57', width: 50, height: 100 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 100 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 100 }} />
        </View>

        {/* Menu teks */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Beranda</Text>
          <Text>Video</Text> 
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text> 
          <Text>Tentang</Text>
        </View>


        <View style={{  alignItems: 'center', justifyContent: 'flex-start', marginTop: 20 }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/51/ba/fa/51bafae3ff3c7d175d9efad4cf2a3da2.jpg',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Selvi Desti Riyani</Text> 
            <Text>3 JT subscriber</Text> 
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
