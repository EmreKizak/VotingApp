import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Button} from 'native-base';
import client from '../../Apollo';
import {gql} from '@apollo/client';
import Questions from '../Questions';

const Home = () => {
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
  return (
    <View>
      {/* <Button m={10} shadow={2} onPress={() => console.log('hello world')}>
        Click me
      </Button> */}
      <Questions />
    </View>
  );
};

export default Home;
