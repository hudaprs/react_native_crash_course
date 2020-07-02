import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Bread',
    },
    {
      id: 2,
      text: 'Milk',
    },
    {
      id: 3,
      text: 'Eggs',
    },
    {
      id: 4,
      text: 'Juice',
    },
  ]);

  const addItem = text => {
    setItems(items => [{id: items.length + 1, text}, ...items]);
  };

  const deleteItem = id => {
    setItems(items => items.filter(item => item.id != id));
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem
              item={item}
              keyExtractor={item => item.id}
              deleteItem={deleteItem}
            />
          )}
        />
      ) : (
        <Text style={styles.noItemsFound}>No Items Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItemsFound: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 15,
    color: '#ff0000',
  },
});

export default App;
