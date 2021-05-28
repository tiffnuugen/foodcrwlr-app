# Foodcrwlr
An app to find good eats, leave reviews, and save restaurants. They can add, edit, and delete reviews as well as save and unsave restaurants. It is built with React/Redux on the frontend and Rails API as the backend. It also uses the Yelp API for the restaurant data, so please make sure to get a unique api key and client id by following [this quick guide](https://www.yelp.com/developers/documentation/v3/authentication), then store it in an `.env` file within the backend. 
 
## Installation
### Frontend
```
npm install
```

### Backend
```
bundle install
```
## Usage
### Frontend
```
npm start
```

### Backend
```
rails db:create
rails db:migrate
rails s -p 3001
```

## Contributing
Sorry, contributions are not accepted for this project.

## License
[MIT](https://choosealicense.com/licenses/mit/)
