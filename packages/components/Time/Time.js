import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet } from 'react-native';

const TIME_FORMAT = 'h:mm a';

const Time = ({ timezone }) => {
  // EST, CST, MST, PST
  const getCurrentTime = (timezone = null) => {
    if (!timezone) {
      return moment().format(TIME_FORMAT);
    }
  
    // TODO make timezones work :)
    return moment().tz(timezone).format(TIME_FORMAT);
  };

  const time = getCurrentTime(timezone);

  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  time: {},
});

export default Time;
