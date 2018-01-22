import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-elements';
import Item from './Item';

const Posts = ({ items }) => {
  return (
    <List>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </List>
  );
}

export default Posts;
