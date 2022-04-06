import React from 'react';
import {View, StyleSheet} from 'react-native';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const size = 70;
const iconSize = 25;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    width: size,
    height: size,
    backgroundColor: '#C4C4C4',
    borderRadius: size / 2,
  },
  icon: {
    margin: (size - iconSize) / 2,
  },
  cameraContainer: {
    height: 160,
    width: 125,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function DisableCameraScreen() {
  return (
    <View style={styles.root}>
      <View testID="cameraWithoutConfig" style={styles.cameraContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faUserAlt}
            color="#FFF"
            size={iconSize}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
}
