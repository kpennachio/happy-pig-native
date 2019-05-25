import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <Text style={styles.logoText}>
            Happy Pig
          </Text>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
           <View style={{width: 75, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={styles.conditionText}>Hunger</Text>
           </View>
           <View style={{width: 75, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={styles.conditionText}>Hygiene</Text>
           </View>
           <View style={{width: 75, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={styles.conditionText}>Active</Text>
           </View>
           <View style={{width: 75, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={styles.conditionText}>Energy</Text>
           </View>
           <View style={{width: 75, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={styles.conditionText}>Happy</Text>
           </View>
          </View>

          <View style={styles.welcomeContainer}>
            <Image source={require('../assets/images/pig-test.jpeg')}/>
          </View>

        </ScrollView>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  logoText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    paddingTop: 30
  },
  conditionText: {
    textAlign: 'center',
    lineHeight: 50
  }
});
