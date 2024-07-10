import React from 'react';
import {StyleSheet, View, Text, useColorScheme} from 'react-native';
import DeclineComp from './PendingRequestComp';
import {ScrollView} from 'react-native-gesture-handler';
import PendingRequestComp from './DeclineComp';
import PublicHolidayComp from './PublicHolidayComp';
const DeclineLeave = ({tweet}) => {
  return (
    <ScrollView style={styles.singleItem}>
      <View>
        <Text style={styles.declineHead}>
          {true ? 'My Decline Leaves (0)' : 'Decline Leaves (0)'}
        </Text>
      </View>
      <DeclineComp />
      <PendingRequestComp />
      <PublicHolidayComp />
      <PendingRequestComp />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 20,
    flex: 1,
    padding: 16,
  },
  declineHead: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 4,
    paddingRight: 4,
    color: '#000',
  },
});

export default DeclineLeave;
