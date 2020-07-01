import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    height: 80,
    padding: 20,
  },
  text: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
