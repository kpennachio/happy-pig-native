import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  AsyncStorage,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import SelectAnimal from '../components/SelectAnimal'
import SelectName from '../components/SelectName'


class NewAnimalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // # t.string "name"
  //   # t.string "type"
  //   # t.integer "hunger"
  //   # t.integer "hygiene"
  //   # t.integer "active"
  //   # t.integer "energy"
  //   # t.integer "happy"
  //
  state = {
    animalType: "",
    animalName: "",
  }

  selectType = (payload) => {
    this.setState({animalType: payload})
  }

  selectName = (payload) => {
    this.setState({animalName: payload})
  }

  renderSelection = () => {
    if (this.state.animalType === "") {
      return <SelectAnimal selectType={this.selectType}/>
    }
    else return <SelectName selectName={this.selectName}/>
  }


  render() {
    console.log("home screen");

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              {`Let's get a new pet!`}
            </Text>
            <View>
              {this.renderSelection()}
            </View>
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
    paddingTop: 60,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});


function mapStateToProps(state) {
  return {
    username: state.username,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(NewAnimalScreen);
