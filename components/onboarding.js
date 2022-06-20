/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: 'Dashboard',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/logo1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'Authentication',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/logo1.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'Get Started',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/logo1.jpg'),
    backgroundColor: '#22bcb5',
  },
];

export default function OnboardingScreen() {
  const [showRealApp, setshowRealApp] = useState(false);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
    setshowRealApp(true);
  };
  if (showRealApp) {
    //return <App />;
  } else {
    return (
      <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
});
