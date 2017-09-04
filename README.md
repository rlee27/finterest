# Finterest
Finterest is a web application for sharing of ideas and photos for those who live under the sea. This was inspired by Pinterest. Finterest was built using Ruby on Rails with React.js.

[Finterest](https://finterest17.herokuapp.com/#/)

## Features
* Sign up/Log in with email
* Curate a user's home feed
* Create Boards
* Create Pins
* Upload pin content from either local device or internet
* Follow topics
* Visit other user pages and interact their boards and pins
* Save other pins to your own boards
* Have your own description for pins you save

## Home Feed
![Home Feed](./docs/home_feed.png)
### Home Feed Details:
* Finterest first prompts new users to select 5 topics to follow. These 5 topics are then attached to the user as followed topics. Finterest then searches all pins in the database for any pins that have the same topics the user chooses to follow. A polymorphic 'follows' table is used to link the user and the topics the user can follow.

## Libraries
The libraries used for Finterest:
* [React](https://github.com/facebook/react)
* [React-Router](https://github.com/ReactTraining/react-router)
* [React-Modal](https://github.com/reactjs/react-modal)
* [Paperclip](https://github.com/thoughtbot/paperclip)
* [figaro](https://github.com/laserlemon/figaro)
* [BCrypt](https://github.com/codahale/bcrypt-ruby)

## Todos
- [ ] Implementation of user and board follows
- [ ] Notifications
- [ ] Search
