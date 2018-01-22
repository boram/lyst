import moment from 'moment-timezone';
import { FlatList } from 'react-native';
import Posts, { UpdateStatus } from './';
import { Title } from 'components/common/typography';
import Item from './Item';

describe('<Posts />', () => {
  let posts
  let updatedAt

  const data = [
    {
      id: '1',
      user: { name: 'Example User' },
      text: 'This is a social media posting',
      created_at: 'Fri Dec 29 18:07:02 +0000 2017',
    }
  ]

  const timeZone = moment.tz.guess();

  beforeEach(() => {
    posts = shallow(
      <Posts
        items={data}
        timeZone={timeZone}
        updatedAt={updatedAt}
      />
    );
  });

  describe('by default', () => {
    test('displays the title', () => {
      const title = posts.find(Title);
      expect(title.length).toBe(1);
      expect(title.html()).toContain('RECENT POSTS');
    });

    test('renders <FlatList />', () => {
      const flatList = posts.find(FlatList);
      expect(flatList.length).toBe(1);
      expect(flatList.prop('data')).toBe(data);
      expect(flatList.prop('renderItem')).toBe(Item);
      expect(typeof flatList.prop('keyExtractor')).toBe('function');
    });
  });

  describe('when updatedAt is present', () => {
    const updatedAt = '29/12/2017 12:30';

    beforeEach(() => {
      posts.setProps({ updatedAt });
    });

    test('displays the update status', () => {
      const updateStatus = posts.find(UpdateStatus);
      expect(updateStatus.length).toBe(1);
      expect(updateStatus.html()).toContain(`Last updated at ${updatedAt}`);
    });
  });
});
