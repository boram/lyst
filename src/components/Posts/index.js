import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Title } from 'components/common/typography';
import Item from './Item';

import colors from 'theme/colors';

const Container = styled.View`
  margin-top: 40px;
  padding: 20px;
  background-color: ${colors.lightCyan};
  height: 100%;
`

const Posts = ({ items }) => {
  return (
    <Container>
      <Title>RECENT POSTS</Title>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}

export default Posts;
