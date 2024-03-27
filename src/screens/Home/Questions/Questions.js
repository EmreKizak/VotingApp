import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_QUESTIONS_QUERY} from './Queries';

const Questions = () => {
  const {Loading, error, data} = useQuery(GET_QUESTIONS_QUERY);
  if (Loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }
  console.log('data', data);
  return (
    <View>
      <Text>Questions</Text>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
