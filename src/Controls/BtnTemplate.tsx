import React, {useContext} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import PropsContext, {IconsInterface} from './../PropsContext';
import styles from '../Style';
import icons from './Icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface BtnTemplateInterface {
  name: keyof IconsInterface;
  color?: string;
  onPress?: TouchableOpacityProps['onPress'];
  style?: StyleProp<ViewStyle>;
}

const BtnTemplate: React.FC<BtnTemplateInterface> = (props) => {
  const {styleProps} = useContext(PropsContext);
  const {BtnTemplateStyles, theme, iconSize, customIcon} = styleProps || {};

  return (
    <TouchableOpacity
      style={{
        ...styles.controlBtn,
        ...(BtnTemplateStyles as object),
        ...(props.style as object),
      }}
      onPress={props.onPress}>
      {typeof customIcon?.[props.name] !== 'string' ? (
        <FontAwesomeIcon
          size={iconSize}
          color={theme || props.color || '#fff'}
          icon={customIcon?.[props.name] as IconProp}
        />
      ) : (
        <Image
          style={{
            width: iconSize || 25,
            height: iconSize || 25,
            tintColor: theme || props.color || '#fff',
          }}
          source={{
            uri: customIcon?.[props.name]
              ? (customIcon[props.name] as string)
              : (icons[props.name] as string),
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default BtnTemplate;
