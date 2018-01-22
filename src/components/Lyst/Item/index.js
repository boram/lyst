import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px 20px;
`;

const Author = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const Content = styled.Text`
  font-size: 16px;
`;

const PostDate = styled.Text`
  font-size: 16px;
`;

const Item = ({ item }) => {
  return (
    <Container>
      <Author>
        {item.user.name}
      </Author>
      <Content>
        {item.text}
      </Content>
      <PostDate>
        {item.created_at}
      </PostDate>
    </Container>
  );
}

export default Item;
