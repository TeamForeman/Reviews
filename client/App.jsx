import React from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import AllReviews from './AllReviews.jsx';
import PopUpModal from './PopUpModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: [],
      reviews: []
    };
  }
  componentDidMount () {
    console.log('location:', window.location);
    var id = window.location.pathname.split('/');
    id = id[id.length - 1];

    axios.get(`/beartnt/reviews/${id}`)
      .then(data => {
        console.log('reviews', data.data);
        this.setState({
          reviews: data.data
        });
        return axios.get(`/beartnt/ratings/${id}`);
      })
      .then(data => {
        console.log('ratings', data.data);
        this.setState({
          ratings: data.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    return (
      <div className='full-body'>
        <div>Reviews</div>
        <Ratings rate={this.state.ratings} numOfReviews={this.state.reviews.length}/>
        <AllReviews reviews={this.state.reviews}/>
        <PopUpModal reviews={this.state.reviews} ratings={this.state.ratings}/>
      </div>
    );
  }
}

export default App;