import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, TouchableOpacity, FlatList, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import users from './data.json';

const thumbImage = 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/contacts-512.png';
const thumbImageDetail = 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Elliot_Grieveson.png';

const contactItem = (item, props) => {
  const { navigate } = props.navigation;
  return (
    <TouchableOpacity
      onPress={() => navigate('Detail', item)}
    >
      <View style={styles.itemStyle}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const Home = props => {
  return(
    <Fragment>
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.thumbnailStyle}
          source={{uri: thumbImage}}
        />
      </View>
      <FlatList
        data={users}
        renderItem={(data) => contactItem(data.item, props)}
        keyExtractor={(data) => data.id.toString()}
      />
    </Fragment>
  );
}

const Detail = props => {
const {name, username, phone, email, website} = props.navigation.state.params;
  return(
    <Fragment>
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.thumbnailStyle}
          source={{uri: thumbImageDetail}}
        />
      </View>
      <View style={styles.itemDetailStyle}>
        <Text>{name}</Text>
        <Text>{phone}</Text>
        <Text>{username}</Text>
        <Text>{email}</Text>
        <Text>{website}</Text>
      </View>
    </Fragment>
  );
}

const RootNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail }
  },
  { initialRouteName: 'Home' }
);

class App extends Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8c00'
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  itemStyle: {
    padding: 15,
    borderColor: 'lightgray',
    borderBottomWidth: 0.5
  },
  itemDetailStyle: {
    margin: 30
  }
});

export default App;