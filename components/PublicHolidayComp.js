import React from 'react';
import {StyleSheet, View, Text, useColorScheme, Button} from 'react-native';
import Tweet from './Tweet';
import {Router} from 'express';
import {Icon} from 'react-native-elements';
const PublicHolidayComp = ({tweet}) => {
  return (
    <View style={styles.singleItem}>
      <View
        style={{
          flex: 1,
          paddingRight: 15,
          alignItems: 'start',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',

            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.declineHead}>{'Annual Leave'}</Text>
          </View>
          <View>
            <Icon name="delete" size={25} color="#900" />
          </View>
        </View>
        <View style={{marginTop: -10}}>
          <Text>29/05/2024 - 31/05/2024</Text>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#000'}}>
          <Icon name="delete" size={25} color="#900" />
        </Text>
        <Text>{'Requested on Wed 29 May 2024'}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#000'}}>Note's:</Text>
        <Text>{'N/A'}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: '#000'}}>User's:</Text>
        <Text>{'Owner cuchi, '}</Text>
      </View>
      <View
        style={{
          flex: 0,
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <View style={{width: '35%'}}>
          <Text style={{color: '#88CDECFF', fontSize: 16, fontWeight: 'bold'}}>
            {' '}
            Not Deducted
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    minHeight: 225,
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
    paddingRight: 40,
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

export default PublicHolidayComp;
