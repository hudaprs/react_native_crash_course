import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  const addNewItem = () => {
    if (!text) {
      Alert.alert('Error', 'Please enter some item', [{text: 'OK'}]);
    } else {
      setText('');
      addItem(text);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={addNewItem}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    margin: 5,
    padding: 9,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btnClearCurrent: {
    backgroundColor: '#333',
    margin: 5,
    padding: 9,
  },
  btnTextClearCurrent: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default AddItem;
