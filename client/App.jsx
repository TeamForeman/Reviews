import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    axios.get('/beartnt/ratings')
      .then(data => {
        console.log(data.data);
      })
      .catch(err => {
        console.log(err);
      });
    axios.get('/beartnt/reviews')
      .then(data => {
        console.log(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    return (
      <h1>World</h1>
    );
  }
}

export default App;