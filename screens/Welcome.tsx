import { MaterialIcons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';

export default class Welcome extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.contentSup}>
                <Text style={styles.title}>Money Transfer</Text>
                <Text style={styles.description}>Money transfer conveniently anytime, from anywhere and any device.</Text>
            </View>
            
            <View style={styles.contentInf}>
                <View style={styles.btnStart}>
                    <Text style={styles.textBtn}>Start</Text>
                </View>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  title: {
    flex: 0.6,
    fontSize: 40,
    paddingBottom: 0,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 5,
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: 14,
    fontStyle: 'italic',
    flex: 1,
  },
  contentSup: {
    flex:1,
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 40,
    paddingTop: '20%'
  },
  contentInf: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 50,
    width: '100%',
  },
  btnStart: {
    backgroundColor: 'black',
    color: 'white',
    height: 100,
    width: 100,
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
