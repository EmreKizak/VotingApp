import {StyleSheet, Text, View} from 'react-native';
import {Box, Heading, Input, Button, Stack} from 'native-base';
import React, {useState} from 'react';

const AddNewModal = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{text: ''}, {text: ''}]);
  const handleOptionChange = (val, i) => {
    const data = [...options];
    data[i].text = val;
    setOptions(data);
  };

  return (
    <Box backgroundColor="#ddd" flex={'1'}>
      <Box p="6" flex={'1'}>
        <Heading mb={2}>Question</Heading>
        <Input
          placeholder="Enter a new question..."
          fontSize={20}
          borderColor={'#686565'}
          value={question}
          onChangeText={setQuestion}
        />
        <Heading mt="6" mb="2">
          Options
        </Heading>
        {options.map((item, i) => (
          <Input
            placeholder="Enter a new question..."
            fontSize={18}
            borderColor={'#686565'}
            mb={1}
            key={i}
            value={item.text}
            onChangeText={val => handleOptionChange(val, i)}
          />
        ))}
        {console.log(options)}
        <Stack mt={2} alignItems={{base: 'flex-end'}}>
          <Button colorScheme={'coolGray'}> New Option </Button>
        </Stack>
      </Box>
      <Box>
        <Button> Save </Button>
      </Box>
    </Box>
  );
};

export default AddNewModal;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
