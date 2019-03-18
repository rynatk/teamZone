import React from 'react';
import { Image, StyleSheet } from 'react-native';
import gravatar from 'gravatar';

export const SIZES = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const PIXEL_SIZE = 100;
const ADORABLE_URL = `https://api.adorable.io/avatars/${PIXEL_SIZE}/`;

const Avatar = ({ email }) => {
  const gravatarOptions = {
    protocol: 'https',
    d: `${ADORABLE_URL}${email}` // default image if no Gravatar returned
  };

  const uri = gravatar.url(email, gravatarOptions);

  return <Image source={{ uri }} style={styles.image} />;
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 50,
    width: 50,
  },
});

export default Avatar;
