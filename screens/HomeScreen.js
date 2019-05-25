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
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

          <View style={styles.conditionsContainer}>
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

          <View style={styles.pigImageContainer}>
            <Image source={require('../assets/images/pig-test.jpeg')}/>
          </View>

          <View style={styles.resourcesContainer}>
            <MaterialCommunityIcons name="food-fork-drink" size={40} />
            <MaterialCommunityIcons name="shower" size={40} />
            <MaterialCommunityIcons name="baseball-bat" size={40} />
            <MaterialCommunityIcons name="sleep" size={40} />
            <MaterialCommunityIcons name="music" size={40} />
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
  pigImageContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  conditionsContainer: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  resourcesContainer: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
