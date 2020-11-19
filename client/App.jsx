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
    this.percentageBar = this.percentageBar.bind(this);
    this.readMore = this.readMore.bind(this);
  }
  componentDidMount () {
    var id = window.location.pathname.split('/');
    id = id[id.length - 1];
    if (id.length === 0) {
      id = 67;
    }
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

  readMore (string) {
    var position = 100;
    var newString = [string.slice(0, position), string.slice(position)];
    return newString;
  }

  percentageBar (score) {
    var styles = {
      height: '5px',
      backgroundColor: 'black',
      borderRadius: '15px'
    };
    styles.width = (score / 5 * 100) + '%';
    return styles;
  }

  render () {
    return (
      <div className='margin'>
        <div className='full-body'>
          <p hidden>test</p>
          <Ratings
            ratings={this.state.ratings}
            numOfReviews={this.state.reviews.length}
            percentageBar={this.percentageBar}
          />
          <AllReviews
            readMore={this.readMore}
            reviews={this.state.reviews}
          />
          <PopUpModal
            reviews={this.state.reviews}
            ratings={this.state.ratings}
            numOfReviews={this.state.reviews.length}
            percentageBar={this.percentageBar}
          />
        </div>
      </div>
    );
  }
}

export default App;