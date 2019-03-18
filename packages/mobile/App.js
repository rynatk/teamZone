/** MOBILE */
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

import { MemberList } from 'components';
import { colors } from 'theme';
import data from 'mock/data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MemberList members={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default App;
