import React, { Component } from 'react';
import Lyst from 'components/Lyst';
import {
  FEED_URL,
  POSTS_COUNT,
  UPDATE_INTERVAL,
} from 'config';

class Main extends Component {
  state = {
    loading: false,
    data: [],
    entityId: null,
    error: null,
    intervalId: null,
  }

  componentDidMount() {
    const intervalId = setInterval(this.fetchData, UPDATE_INTERVAL);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  fetchData = async () => {
    const { entityId } = this.state;

    this.setState({ loading: true });

    const url = `${FEED_URL}?limit=${POSTS_COUNT}`;

    try {
      const response = await fetch(url);
      const payload = await response.json();

      this.setState(
        {
          data: payload,
          error: null,
          loading: false,
        }
      );
    } catch(error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    return <Lyst items={this.state.data} />;
  }
}

export default Main;
