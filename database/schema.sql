DROP DATABASE IF EXISTS beartnt_reviews;

CREATE DATABASE beartnt_reviews;

USE beartnt_reviews;

CREATE TABLE ratings(
  ratings_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  average DECIMAL,
  cleanliness DECIMAL,
  communication DECIMAL,
  checkin DECIMAL,
  accuracy DECIMAL,
  location DECIMAL,
  value DECIMAL,
  PRIMARY KEY (ratings_id)
);

CREATE TABLE reviews (
  reviews_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  date VARCHAR(10),
  reviewBody VARCHAR(200),
  profilePic VARCHAR(50),
  ratings_id INT,
  PRIMARY KEY (reviews_id),
  FOREIGN KEY (ratings_id)
    REFERENCES ratings(ratings_id)
);

-- SAMPLE DATA

INSERT INTO ratings (name, cleanliness, communication, checkin, accuracy, location, value) VALUES ('doras house', 4.4, 3.6, 2.4, 5.0, 3.4, 2.2);
INSERT INTO reviews (name, date, reviewBody, profilePic, ratings_id) VALUES ('sally', 'OCT 2020', 'It was sooo good', 'url.com', 1);
INSERT INTO reviews (name, date, reviewBody, profilePic, ratings_id) VALUES ('jim', 'OCT 2020', 'It was ok', 'url.com', 1);

-- TO SEED THE DATABASE
  -- cd into the Customer-Reviews-Service folder
  -- run the code: mysql -u root < database/schema.sql

-- TO VIEW THE WHOLE DATABASE BY LISTING
  -- run in the terminal:
  -- mysql -u root
  -- USE beartnt_reviews
  -- SELECT * FROM ratings
  -- INNER JOIN reviews
  -- ON reviews.ratings_id = ratings.ratings_id;


--OLD ATTEMPT I REFRACTORED ABOVE

-- CREATE TABLE listings (
--   listings_id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(20),
--   PRIMARY KEY (listings_id)
-- );

-- CREATE TABLE Reviews (
--   reviews_id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(20),
--   date VARCHAR(10),
--   reviewBody VARCHAR(200),
--   profilePic VARCHAR(50),
--   listings_id INT,
--   PRIMARY KEY (reviews_id),
--   FOREIGN KEY (listings_id)
--     REFERENCES listings(listings_id)
-- );

-- CREATE TABLE ratings (
--   ratings_id INT NOT NULL AUTO_INCREMENT,
--   average DECIMAL,
--   cleanliness DECIMAL,
--   communication DECIMAL,
--   checkin DECIMAL,
--   accuracy DECIMAL,
--   location DECIMAL,
--   value DECIMAL,
--   listings_id INT,
--   PRIMARY KEY (ratings_id),
--   FOREIGN KEY (listings_id)
--     REFERENCES listings(listings_id)
-- );

-- SAMPLE DATA

-- INSERT INTO listings (name) VALUES ('doras home');
-- INSERT INTO reviews (name, date, reviewBody, profilePic, listings_id) VALUES ('sally', 'OCT 2020', 'It was sooo good', 'url.com', 1);
-- INSERT INTO reviews (name, date, reviewBody, profilePic, listings_id) VALUES ('jim', 'OCT 2020', 'It was ok', 'url.com', 1);
-- INSERT INTO ratings (cleanliness, communication, checkin, accuracy, location, value, listings_id) VALUES (4.4, 3.6, 2.4, 5.0, 3.4, 2.2, 1);

-- TO SEED THE DATABASE
  -- cd into the Customer-Reviews-Service folder
  -- run the code: mysql -u root < database/schema.sql

-- TO VIEW THE WHOLE DATABASE BY LISTING
  -- run in the terminal:
  -- mysql -u root
  -- USE beartnt_reviews
  -- SELECT * FROM listings
  -- INNER JOIN ratings
  -- ON ratings.listings_id = listings.listings_id
  -- INNER JOIN reviews
  -- ON reviews.listings_id = listings.id;