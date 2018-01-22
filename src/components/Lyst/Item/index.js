import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment-timezone';

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
  const timeZone = moment.tz.guess();
  const createdAtMoment = moment.tz(
    item.created_at,
    "ddd MMM DD HH:mm:ss ZZ YYYY",
    timeZone
  );

  return (
    <Container>
      <Author>
        {item.user.name}
      </Author>
      <Content>
        {item.text}
      </Content>
      <PostDate>
        {createdAtMoment.format("DD/MM/YYYY HH:mm")}
      </PostDate>
    </Container>
  );
}

export default Item;
