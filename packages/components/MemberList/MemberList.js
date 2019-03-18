import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import { colors } from 'theme';
import { MemberInfoCard } from '../index';

const MemberList = (props) => {
  const renderMemberInfoCard = ({ item }) => {
    return (
      <MemberInfoCard
        key={item.id}
        member={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🕐 Team Zone 🔥</Text>
      <FlatList
        data={props.members}
        renderItem={renderMemberInfoCard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  header: {
    backgroundColor: colors.yellow,
    color: colors.dark,
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 10,
    textAlign: 'center',
  },
  teamList: {
    flex: 1,
    textAlign: 'center',
  },
});

export default MemberList;
