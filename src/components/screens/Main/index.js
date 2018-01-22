import React, { Component } from 'react';
import Lyst from 'components/Lyst';
import {
  FEED_URL,
  POSTS_COUNT,
} from 'config';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      entityId: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { entityId } = this.state;

    this.setState({ loading: true });

    const url = `${FEED_URL}?limit=${POSTS_COUNT}`;

    try {
      const response = await fetch(url);
      const json = await response.json();

      this.setState(
        {
          data: [...this.state.data, ...json],
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
