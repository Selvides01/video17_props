import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Story = props => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image
        source={{ uri: props.gambar }}
        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          <Story 
            judul="Youtube Channel" 
            gambar="https://www.gstatic.com/webp/gallery/1.jpg" 
          />
          <Story 
            judul="Kelas Online" 
            gambar="https://cdn.pixabay.com/photo/2020/09/01/18/01/online-education-5535405_960_720.jpg" 
          />
          <Story 
            judul="Kabayan Coding" 
            gambar="https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg" 
          />
          <Story 
            judul="Shoot" 
            gambar="https://cdn.pixabay.com/photo/2017/08/30/01/18/camera-2690732_960_720.jpg" 
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
