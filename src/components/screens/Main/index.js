import React, { Component } from 'react';
import Lyst from 'components/Lyst';

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
    const url = "http://api.massrelevance.com/MassRelDemo/kindle.json";

    const { entityId } = this.state;

    this.setState({ loading: true });

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
