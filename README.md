# Project Name

> Reviews module modeled after airbnb

## Related Projects

  - https://github.com/Mormont-team-6/photo-carousel
  - https://github.com/Mormont-team-6/Reservation-Service
  - https://github.com/Mormont-team-6/places-to-stay
  - https://github.com/Mormont-team-6/Customer-Reviews-Proxy

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)

## CRUD API
Action | METHOD | URL
-------|--------|----
Create a review | POST | /api/reviews-module/reviews
Retrieve reviews | GET | /api/reviews-module/reviews/:id
Retrieve ratings | GET | /api/reviews-module/ratings/:id
Update a review | UPDATE | /api/reviews-module/reviews/:id
Delete a review | DELETE | /api/reviews-module/reviews/:id

## Usage

Startind node / nodemon

```sh

npm start

npm run-script start:dev

```

Starting and stopping a pm2 instance

```sh

sudo npm install pm2@latest -g

npm run-script start:pm2

npm run-script stop:pm2

```

## Development

### Install Dependencies

From within the root directory:

```sh

npm install

```
Webpack

```sh

npm run-script build

```


