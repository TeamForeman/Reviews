import React from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import AllReviews from './AllReviews.jsx';
import PopUpModal from './PopUpModal.jsx';
import css from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: [],
      reviews: [],
      modalReviews: [],
      searchBar: ''
    };
    this.percentageBar = this.percentageBar.bind(this);
    this.readMore = this.readMore.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount () {
    var id = window.location.pathname.split('/');
    id = id[id.length - 1];
    if (id.length === 0) {
      id = 67;
    }
    axios.get(`/api/reviews-module/reviews/${id}`)
      .then(data => {
        console.log('reviews', data.data);
        this.setState({
          reviews: data.data,
          modalReviews: data.data
        });
        return axios.get(`/api/reviews-module/ratings/${id}`);
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

  handleChange (e) {
    this.setState({
      searchBar: e.target.value
    });
  }

  resetSearch () {
    this.setState({
      modalReviews: this.state.reviews
    });
  }

  search (e) {
    if (e.key === 'Enter') {
      var newProps = [];
      this.state.reviews.map(prop => {
        if (prop.reviewBody.includes(this.state.searchBar)) {
          newProps.push(prop);
        }
      });
      // if (newProps.length === 0) {
      //   this.setState({
      //     modalReviews: [{reviewBody: `There are no results for ${this.state.searchBar}`, profilePic: null}]
      //   });
      // } else {
      this.setState({
        modalReviews: newProps
      });
      // }
    }
  }

  render () {
    return (
      <div className='reviews-margin-body'>
        <div className='reviews-full-body'>
          <p hidden>test</p>
          <Ratings
            ratings={this.state.ratings}
            numOfReviews={this.state.reviews.length}
            percentageBar={this.percentageBar}
          />
          <AllReviews
            isModal={false}
            readMore={this.readMore}
            reviews={this.state.reviews.slice(0, 4)}
          />
          <PopUpModal
            reviews={this.state.modalReviews}
            ratings={this.state.ratings}
            numOfReviews={this.state.reviews.length}
            handleChange={this.handleChange}
            search={this.search}
            readMore={this.readMore}
            percentageBar={this.percentageBar}
          />
        </div>
      </div>
    );
  }
}

export default App;