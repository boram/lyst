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
  color: ${colors.sapphire};
`;

const Date = styled.Text`
  font-size: ${fonts.small.size};
  line-height: ${fonts.small.lineHeight};
  color: ${colors.verdigris};
`;

const Item = (props) => {
  const {
    item,
    timeZone,
  } = props;

  const createdAt = moment.tz(
    item.created_at,
    "ddd MMM DD HH:mm:ss ZZ YYYY",
    timeZone
  ).format("DD/MM/YYYY HH:mm");

  return (
    <Container>
      <Author>
        {item.user.name}
      </Author>
      <Content>
        {item.text}
      </Content>
      <Date>
        {createdAt}
      </Date>
    </Container>
  );
}

export default Item;
