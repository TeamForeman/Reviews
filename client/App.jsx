import React from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import AllReviews from './AllReviews.jsx';

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
      <div>
        <Ratings />
        <AllReviews />
      </div>
    );
  }
}

export default App;