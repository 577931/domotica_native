import React from 'react';
import { Image } from 'react-native';
import logo from './images/bombi.png';
import styles from '../styless/styless';

const Logo = () => {
  return <Image source={{ uri: logo }} style={styles.logo} />;
};

export default Logo;
