import {View, Modal, Text} from 'react-native';
import React, {useState} from 'react';
import Questions from './Questions';
import AddButton from '../../components/AddButton';
import AddNewModal from './Questions/Modal/AddNewModal';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton onPress={() => setModalVisible(prev => !prev)} />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Questions />
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}>
        <AddNewModal />
      </Modal>
    </View>
  );
};

export default Home;
