import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment-timezone';
import colors from 'theme/colors';
import fonts from 'theme/fonts';

const Container = styled.View`
  padding-top: 20px;
`;

const Author = styled.Text`
  font-size: ${fonts.medium.size};
  line-height: ${fonts.medium.lineHeight};
  font-weight: 800;
  color: ${colors.sapphire};
`;

const Content = styled.Text`
  font-size: ${fonts.medium.size};
  color: ${colors.ming};
7717A;
`;

const Date = styled.Text`
  font-size: ${fonts.small.size};
  line-height: ${fonts.small.lineHeight};
  color: ${colors.verdigris};
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
      <Date>
        {createdAtMoment.format("DD/MM/YYYY HH:mm")}
      </Date>
    </Container>
  );
}

export default Item;
