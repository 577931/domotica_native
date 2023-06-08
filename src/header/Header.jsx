import React from 'react';
import { View, Text } from 'react-native';
import Logo from './Logo';
import styles from '../styless/styless';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menu}>
        <Text style={styles.menuText}>=</Text>
      </View>
      <View style={styles.centrado}>
        <Logo />
        <Text style={styles.headerText}>Domotiza2</Text>
      </View>
      <View style={styles.beta}>
        <Text style={styles.betaText}>B E T A</Text>
      </View>
    </View>
  );
};

export default Header;