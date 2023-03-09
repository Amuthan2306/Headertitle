import React from 'react';
import {
  Image, Text,
  TouchableOpacity,
  View,
} from 'react-native';


const Headertitle = (props) => {
  const {
    text,
    onPress,
    backgroundColor,
    borderColor,
    text_color,
    height,
    width,
    text_fontSize,
    text_fontWeight,
    tintColor,
    arrow_height,
    arrow_width,
    borderBottomWidth
  } = props
  return (
    <View style={{
      height: height,
      width: width,
      flexDirection: 'row',
      backgroundColor: backgroundColor,
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      borderBottomWidth: borderBottomWidth,
      borderColor: borderColor
    }}>
      <View style={{
        height: '50%',
        width: '15%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TouchableOpacity onPress={onPress}>
          <Image source={require('./src/assets/arrow.png')} style={{ height: arrow_height, width: arrow_width, tintColor: tintColor }} />
        </TouchableOpacity>

      </View>
      <View style={{
        height: '100%',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text style={{
          fontSize: text_fontSize,
          fontWeight: text_fontWeight,
          right: 25,
          color: text_color
        }}>{text}</Text>
      </View>
    </View>
  );
}

export default Headertitle;