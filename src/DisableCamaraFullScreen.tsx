import React from 'react';
import {View, StyleSheet} from 'react-native';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const size = 150;
const iconSize = 50;

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
    height: '100%',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function DisableCameraFullScreen() {
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
