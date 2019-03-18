import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from 'theme';
import { Avatar } from '../index';

const MemberInfoCard = ({ member }) => {
  return (
    <View style={styles.container}>
      <Avatar email={member.email} />
      <Text style={styles.name}>{member.name}</Text>
      <Text styles={styles.timeZone}>EST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  name: {
  },
  email: {
  },
  timeZone: {
  },
});

export default MemberInfoCard;
