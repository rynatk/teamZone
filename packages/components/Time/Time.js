import React from 'react';
import moment from 'moment-timezone';
import { Text, View, StyleSheet } from 'react-native';

const TIME_FORMAT = 'h:mm a';
const TIME_ZONE_MAP = {
  EST: 'America/New_York',
  CST: 'America/Chicago',
  MST: 'America/Denver',
  PST: 'America/Los_Angeles',
};

const Time = ({ timezone }) => {
  const getCurrentTime = (timezone = null) => {
    // do not format an invalid or missing timezone
    if (!timezone || !Object.keys(TIME_ZONE_MAP).includes(timezone)) {
      return moment().format(TIME_FORMAT);
    }
    return moment().tz(TIME_ZONE_MAP[timezone]).format(TIME_FORMAT);
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
