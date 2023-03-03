import React from 'react';
import {
  Image, Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const App = (props) => {
  const {
    text,
    onPress
  } = props
  return (
    <View style={styles.container}>
      <View style={styles.header_View}>
        <TouchableOpacity onPress={onPress}>
          <Icon name='arrow-left' size={30} color={'black'} />
        </TouchableOpacity>

      </View>
      <View style={styles.header_view2}>
        <Text style={styles.header_title}>{text}</Text>
      </View>
    </View>
  );
}
const styles = {
  container: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    borderBottomWidth: 2,
    borderColor: '#F3F3F3'
  },
  header_View: {
    height: '50%',
    width: '15%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header_view2: {
    height: '100%',
    width: '85%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  header_title: {
    fontSize: 20,
    fontWeight: '700',
    right: 25,
    color: 'black'
  }
}
export default App;
