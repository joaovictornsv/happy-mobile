import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import MapView, { Callout, Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';



export default function OrphanagesMap() {
  const navigation = useNavigation();
   
  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails')
  }

  return (

      <View style={styles.container}>
        <MapView
          provider= {PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: -7.2427512,
            longitude: -35.9365838,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }}
        >
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
            coordinate={{
              latitude: -7.2427512,
              longitude: -35.9365838
            }}  
          >
            <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Lar das meninas</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
  
        <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>
  
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
            <Feather name="plus" size={20} color="#FFF"/>
          </TouchableOpacity>
        </View>
  
        <StatusBar style="auto" />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3
  },

  footerText: {
    color: "#8fa7b3",
    fontFamily: 'Nunito_700Bold'
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});