/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useCallback} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from '../../constants/colors';
import GlobalStyles from '../../styles';
import {Layout, NavBar, DegreeView, LoadModal} from '../../components/index';
import BaseServices from '../../services/baseServices';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/core';
import normalize from '../../styles/normalize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addFriend} from '../../action/ListAction';

const HomeScreen = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCityList = async () => {
    try {
      const {data} = await BaseServices.GetList();
      //   console.log('the data', data);
      setData(data.list);
      setLoading(false);
    } catch (error) {
      //   console.log('getList error', error);
    }
    // setTimeout(() => {
    // await props.addFriend(0);
    // console.log(props.friends._W.possible);
    // }, 2000);
  };

  useFocusEffect(
    useCallback(() => {
      getCityList();
    }, []),
  );

  const renderWeather = item => {
    // console.log('weather item', item[0].main);
    return <Text style={styles.heading14Text}>{item[0].main}</Text>;
  };

  const goToMap = item => props.navigation.navigate('Maps', {item: item});

  const renderList = (item, index) => {
    return (
      <TouchableOpacity onPress={() => goToMap(item)} style={styles.listView}>
        <View>
          <Text style={styles.heading18Text}>{item.name}</Text>
          {renderWeather(item.weather)}
        </View>
        <DegreeView number={item.main.temp} />
      </TouchableOpacity>
    );
  };
  //main
  if (loading) {
    return <LoadModal />;
  } else {
    return (
      <Layout>
        <NavBar />
        <FlatList
          data={data}
          renderItem={({item, index}) => renderList(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </Layout>
    );
  }
};

const mapStateToProps = state => {
  const {friends} = state;
  return {friends};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addFriend,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
// export default HomeScreen;
