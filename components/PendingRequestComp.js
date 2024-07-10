import React from 'react';
import {StyleSheet, View, Text, useColorScheme, Button} from 'react-native';
import Tweet from './Tweet';
import {Router} from 'express';

const PendingRequestComp = ({tweet}) => {
  return (
    <View style={styles.singleItem}>
      <View>
        <Text style={styles.declineHead}>{'Annual Leave'}</Text>
      </View>
      <View>
        <Text style={{color: '#000'}}>{'Annual Leave Fri 05 Jul 2024'}</Text>
        <Text>{'Requested on Wed 29 May 2024'}</Text>
      </View>
      <View>
        <Text style={{color: '#000'}}>
          Leave Type: <Text style={{color: '#88CDECFF'}}>{'Annual'}</Text>
        </Text>
        <Text style={{color: '#000'}}>
          Deducted from Annual Leave Entitlement:
          <Text style={{color: '#88CDECFF'}}>{'Annual'}</Text>
        </Text>
        <Text style={{color: '#000'}}>
          Start : <Text style={{color: '#88CDECFF'}}>{'Annual'}</Text>
        </Text>
        <Text style={{color: '#000'}}>
          Ends : <Text style={{color: '#88CDECFF'}}>{'Annual'}</Text>
        </Text>
      </View>
      {true && (
        <View
          style={{
            flex: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{width: '45%'}}>
            <Button title="Approve" color={'#88CDECFF'} />
          </View>
          <View style={{width: '45%'}}>
            <Button color={'#394F9BFF'} title="Decline" />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    minHeight: true ? 300 : 225,
    flex: 1,
    padding: 16,
    paddingLeft: 25,
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  declineHead: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingRight: 4,
    color: '#000',
  },
  date: {
    fontWeight: 'bold',
    color: '#000',
  },
  fixToText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
  fixToText2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default PendingRequestComp;
