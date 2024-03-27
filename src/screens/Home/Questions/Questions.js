import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {gql, useSubscription} from '@apollo/client';
import {GET_QUESTIONS_SUBSCRIPTION} from './Queries';
import client from '../../../Apollo';

const Questions = () => {
  useEffect(() => {
    client.query({
      query: gql`
        query {
          question {
            id
            text
          }
        }
      `,
    });
  }, []);

  const {Loading, error, data} = useSubscription(GET_QUESTIONS_SUBSCRIPTION);
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
