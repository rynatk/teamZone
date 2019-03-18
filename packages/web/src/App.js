import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MemberList } from 'components';
import { colors } from 'theme';
import data from 'mock/data.json';

const App = () => {
  return (
    <View style={styles.canvas}>
      <View style={styles.container}>
        <MemberList members={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    borderRadius: 20,
    flex: 1,
    width: '80%',
  },
});

export default App;
