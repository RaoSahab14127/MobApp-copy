import React from 'react';
import {StyleSheet, View, Text, useColorScheme} from 'react-native';
import Tweet from './Tweet';

const DeclineComp = ({tweet}) => {
  return (
    <View style={styles.singleItem}>
      <View>
        <Text style={styles.declineHead}>{'Annual Leave'}</Text>
      </View>
      <View>
        <Text style={styles.date}>
          {tweet?.startDate ? tweet.startDate : 'Fri 29 Mar 2024'} -{' '}
          {tweet?.startDate ? tweet.startDate : 'Fri 29 Mar 2024'}
        </Text>
      </View>
      <View>
        <Text>Reason: {tweet?.reason ? tweet.reason : 'None'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    minHeight: 100,
    flex: 1,
    padding: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  declineHead: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingRight: 4,
    color: '#88CDECFF',
  },
  date: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DeclineComp;
