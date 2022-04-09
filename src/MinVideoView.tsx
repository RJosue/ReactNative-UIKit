import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Image, Text, BackHandler} from 'react-native';
import {RtcLocalView, RtcRemoteView, VideoRenderMode} from 'react-native-agora';
import styles from './Style';
import icons from './Controls/Icons';
import RemoteControls from './Controls/RemoteControls';
import PropsContext from './PropsContext';
import {UidInterface} from './RtcContext';
import DisableCamaraScreen from './DisableCamaraScreen';

const LocalView = RtcLocalView.SurfaceView;
const RemoteView = RtcRemoteView.SurfaceView;

interface MinViewInterface {
  user: UidInterface;
  color?: string;
  showOverlay?: boolean;
}

const MinVideoView: React.FC<MinViewInterface> = (props) => {
  const [overlay, setOverlay] = useState(false);

  const {styleProps} = useContext(PropsContext);
  const {
    minViewStyles,
    theme,
    remoteBtnStyles,
    iconSize,
    overlayContainer,
    videoMode,
  } = styleProps || {};
  const renderModeProp = videoMode?.min;
  const {minCloseBtnStyles} = remoteBtnStyles || {};
  const {showOverlay} = props || {};
  return (
    <View style={{borderRadius: 10}}>
      {showOverlay ? (
        <>
          {props.user.uid === 'local' ? (
            !props.user.video ? (
              <DisableCamaraScreen />
            ) : (
              <LocalView
                style={{...styles.minView, ...(minViewStyles as object)}}
                renderMode={
                  renderModeProp ? renderModeProp : VideoRenderMode.Hidden
                }
                zOrderMediaOverlay={true}
              />
            )
          ) : !props.user.video ? (
            <DisableCamaraScreen />
          ) : (
            <RemoteView
              style={{...styles.minView, ...(minViewStyles as object)}}
              uid={props.user.uid as number}
              renderMode={
                renderModeProp ? renderModeProp : VideoRenderMode.Hidden
              }
              zOrderMediaOverlay={true}
            />
          )}
        </>
      ) : props.user.uid === 'local' ? (
        !props.user.video ? (
          <DisableCamaraScreen />
        ) : (
          <LocalView
            style={{...styles.minView, ...(minViewStyles as object)}}
            renderMode={
              renderModeProp ? renderModeProp : VideoRenderMode.Hidden
            }
            zOrderMediaOverlay={true}
          />
        )
      ) : !props.user.video ? (
        <DisableCamaraScreen />
      ) : (
        <RemoteView
          style={{...styles.minView, ...(minViewStyles as object)}}
          uid={props.user.uid as number}
          renderMode={renderModeProp ? renderModeProp : VideoRenderMode.Hidden}
          zOrderMediaOverlay={true}
        />
      )}

      {overlay && showOverlay ? (
        <View style={{...styles.minOverlay, ...(overlayContainer as object)}}>
          <TouchableOpacity
            style={{...styles.minCloseBtn, ...(minCloseBtnStyles as object)}}
            onPress={() => setOverlay(!overlay)}>
            <Image
              style={{
                width: iconSize || 25,
                height: iconSize || 25,
                tintColor: theme || props.color || '#fff',
              }}
              source={{uri: icons.close}}
            />
          </TouchableOpacity>
          <RemoteControls showRemoteSwap={true} user={props.user} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default MinVideoView;
