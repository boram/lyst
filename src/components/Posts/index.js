import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';
import { Title } from 'components/common/typography';
import Item from './Item';
import colors from 'theme/colors';
import fonts from 'theme/fonts';

const Container = styled.View`
  margin-top: 40px;
  padding: 20px;
  background-color: ${colors.lightCyan};
  height: 100%;
`;

export const Header = styled.View`
  margin-bottom: 10px;
`;

export const UpdateStatus = styled.Text`
  font-size: ${fonts.small.size};
  color: ${colors.verdigris};
`;

const Posts = (props) => {
  const {
    items,
    timeZone,
    updatedAt,
  } = props;

  return (
    <Container>
      <Header>
        <Title>RECENT POSTS</Title>
        {updatedAt &&
          <UpdateStatus>
            Last updated at {updatedAt}
          </UpdateStatus>}
      </Header>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Posts;
