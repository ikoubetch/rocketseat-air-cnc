import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, AsyncStorage, View, Image, StyleSheet, ScrollView } from 'react-native';

import logo from '../assets/logo.png'

import SpotList from '../components/SpotList';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs')
      .then((stroageTechs) => {
        if (stroageTechs) {
          const techsArr = stroageTechs.split(',').map((tech) => tech.trim());

          setTechs(techsArr);
        }
      })
  }, [])

  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
      </View>
      <ScrollView>
        {techs.map((tech) => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10
  }
})
