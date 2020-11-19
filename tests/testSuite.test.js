import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../client/App.jsx';
import Ratings from '../client/Ratings.jsx';
import IndividualRating from '../client/IndividualRating.jsx';
import AllReviews from '../client/AllReviews.jsx';
import SingleReview from '../client/SingleReview.jsx';
import PopUpModal from '../client/PopUpModal.jsx';

describe('Testing the rendering of each react element', () => {
  //DUMMY DATA
  var props = {
    reviews: [
      {
        date: 'November 2017',
        name: 'Crystal Fay',
        profilePic: 'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-220453.jpeg',
        ratings_id: 23,
        reviewBody: 'In rem consequatur laudantium. Cumque aut ex minus eos consequatur nam vel eaque harum. Unde est cum debitis consequatur.',
        reviews_id: 224
      },
      {
        date: 'November 2017',
        name: 'Crystal Fay',
        profilePic: 'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-220453.jpeg',
        ratings_id: 23,
        reviewBody: 'In rem consequatur laudantium. Cumque aut ex minus eos consequatur nam vel eaque harum. Unde est cum debitis consequatur.',
        reviews_id: 224
      }
    ],
    review: {
      date: 'November 2017',
      name: 'Crystal Fay',
      profilePic: 'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-220453.jpeg',
      ratings_id: 23,
      reviewBody: 'In rem consequatur laudantium. Cumque aut ex minus eos consequatur nam vel eaque harum. Unde est cum debitis consequatur.',
      reviews_id: 224
    },
    ratings: {
      accuracy: 3.3,
      average: 2.5,
      checkin: 2.6,
      cleanliness: 2.4,
      communication: 4.0,
      location: 1.3,
      ratings_id: 23,
      value: 1.8
    },
    rating: {
      name: 'rating',
      score: '2.4'
    },
    numOfReviews: 4,
    percentageBar: (item) => {
      return item;
    },
    readMore: (item) => {
      return item;
    }
  };

  test('should render App', () => {
    expect(shallow(<App />).contains(<p hidden>test</p>)).toBe(true);
  });

  test('should render Ratings', () => {
    expect(shallow(
      <Ratings
        ratings={props.ratings}
        percentageBar={props.percentageBar}
        props={props}
      />
    ).contains(<p hidden>test</p>)).toBe(true);
  });

  test('should render IndividualRating', () => {
    expect(shallow(
      <IndividualRating
        rating={props.rating}
        percentageBar={props.percentageBar}
        props={props}
      />).contains(<p hidden>test</p>)).toBe(true);
  });

  test('should render SingleReview', () => {
    expect(shallow(
      <SingleReview
        review={props.review}
        readMore={props.readMore}
        props={props}

      />).contains(<p hidden>test</p>)).toBe(true);
  });

  test('should render AllReviews', () => {
    expect(shallow(
      <AllReviews
        reviews={props.reviews}
        readMore={props.readMore}
        props={props}

      />).contains(<p hidden>test</p>)).toBe(true);
  });

  test('should render PopUpModal', () => {
    expect(shallow(
      <PopUpModal
        reviews={props.reviews}
        ratings={props.ratings}
        percentageBar={props.percentageBar}
        numOfReviews={props.numOfReviews}
        props={props}
      />).contains(<p hidden>test</p>)).toBe(true);
  });


});
