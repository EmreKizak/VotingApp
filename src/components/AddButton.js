import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {View} from 'native-base';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color: 'blue'}}>Ekle</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
