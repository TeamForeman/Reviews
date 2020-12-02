DROP DATABASE IF EXISTS beartnt_reviews;

CREATE DATABASE beartnt_reviews;

\c beartnt_reviews;

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  average decimal,
  cleanliness decimal,
  communication decimal,
  checkin decimal,
  accuracy decimal,
  location decimal,
  value decimal
);


CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30),
  date VARCHAR(30),
  reviewBody VARCHAR(1000),
  profilePic VARCHAR(200),
  ratings_id INT,
  FOREIGN KEY (ratings_id)
    REFERENCES ratings(id)
);