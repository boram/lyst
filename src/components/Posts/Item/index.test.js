import moment from 'moment-timezone';
import Item, { Author, Content, CreatedAt } from './';

describe('<Item />', () => {
  let item

  const data = {
    user: { name: 'Example User' },
    text: 'This is a social media posting',
    created_at: 'Fri Dec 29 18:07:02 +0000 2017',
  }

  const timeZone = moment.tz.guess();

  beforeEach(() => {
    item = shallow(
      <Item
        item={data}
        timeZone={timeZone}
      />
    );
  });

  test('displays the author name', () => {
    const author = item.find(Author);
    expect(author.length).toBe(1);
    expect(author.prop('children')).toContain(data.user.name);
  });

  test('displays the post text', () => {
    const content = item.find(Content);
    expect(content.length).toBe(1);
    expect(content.prop('children')).toContain(data.text);
  });

  test('displays the post time', () => {
    const createdAt = item.find(CreatedAt);
    const timestamp = moment.tz(
      data.created_at,
      "ddd MMM DD HH:mm:ss ZZ YYYY",
      timeZone
    ).format("DD/MM/YYYY HH:mm");

    expect(createdAt.length).toBe(1);
    expect(createdAt.prop('children')).toContain(timestamp);
  });
});
