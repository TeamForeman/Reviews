DROP DATABASE IF EXISTS beartnt_reviews;

CREATE DATABASE beartnt_reviews;

\c beartnt_reviews;


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  description VARCHAR(50)
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  "profilePic" VARCHAR(200)
);


CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  average DECIMAL,
  cleanliness DECIMAL,
  communication DECIMAL,
  checkin DECIMAL,
  accuracy DECIMAL,
  location DECIMAL,
  value DECIMAL,
  user_id INT,
  product_id INT,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (product_id)
    REFERENCES products(id)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  "reviewBody" VARCHAR(1000),
  date VARCHAR(30),
  user_id INT,
  product_id INT,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (product_id)
    REFERENCES products(id)
);


