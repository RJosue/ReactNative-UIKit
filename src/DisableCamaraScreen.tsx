import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
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
        <View
      style={styles.root}
    >
        <View testID="cameraWithoutConfig" style={styles.cameraContainer}>
          {/* <RoundIconButton
            icon={faUserAlt}
            iconColor='#000'
            size={50}
            customIconSize={22}
            backgroundColor="#C4C4C4"
          /> */}
          <Text>img</Text>
        </View>
    </View>
      )
}