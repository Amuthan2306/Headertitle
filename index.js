import React from 'react';
import {
  Image, Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Headertitle = (props) => {
  const {
    text,
    onPress,
    backgroundColor,
    borderColor,
    arrow_size,
    arrow_color,
    text_color,
    height,
    width,
    text_fontSize,
    text_fontWeight,
    icon,
    borderBottomWidth,
    borderRadius
  } = props
  return (
    <View style={{
      height: height,
      width:width ,
      flexDirection: 'row',
      backgroundColor: backgroundColor,
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      borderRadius:borderRadius,
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
          <Icon name={icon} size={arrow_size} color={arrow_color} />
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