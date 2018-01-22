import React, { Component } from 'react';
import moment from 'moment-timezone';
import Posts from 'components/Posts';
import {
  FEED_URL,
  POSTS_COUNT,
  UPDATE_INTERVAL,
} from 'config';

class Main extends Component {
  static defaultProps = {
    feedUrl: FEED_URL,
    limit: POSTS_COUNT,
    updateInterval: UPDATE_INTERVAL,
  }

  state = {
    data: [],
    error: null,
    intervalId: null,
    loading: false,
    timeZone: null,
    updatedAt: null,
  };

  constructor(props) {
    super(props);
    this.state.timeZone = moment.tz.guess();
  }

  componentDidMount() {
    this.fetchData();

    const { updateInterval } = this.props;
    const intervalId = setInterval(this.fetchData, updateInterval);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  fetchData = async () => {
    const { feedUrl, limit } = this.props;
    const { timeZone } = this.state;
    const url = `${feedUrl}?limit=${limit}`;

    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const payload = await response.json();
      const updatedAt = moment.tz(timeZone).format('h:mma');

      this.setState(
        {
          data: payload,
          error: null,
          loading: false,
          updatedAt,
        }
      );
    } catch(error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const {
      data,
      timeZone,
      updatedAt
    } = this.state;

    return (
      <Posts
        items={data}
        updatedAt={updatedAt}
        timeZone={timeZone}
      />
    );
  }
}

export default Main;
