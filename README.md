# Finterest
Finterest is a single-page web application, inspired by Pinterest. Finterest was built using Ruby on Rails with Redux.js and React.js.

[Finterest](http://finterest17.herokuapp.com/#/)

## Features
* Curate a user's home feed
* Create and edit Boards
* Upload Pin content from either local device or internet
* Follow topics
* Save other users' Pins to user's own boards

## Home Feed
![Home Feed](./docs/home_feed.png)
### Home Feed Details:
* Finterest first prompts new users to select 5 topics to follow. These 5 topics are then attached to the user as followed topics. Finterest then searches all pins in the database for any pins that have the same topics the user chooses to follow. A polymorphic 'follows' table is used to link the user and the topics the user can follow.

## Libraries
The libraries used for Finterest:
* [React](https://github.com/facebook/react)
* [React-Router](https://github.com/ReactTraining/react-router)
* [Paperclip](https://github.com/thoughtbot/paperclip)
* [figaro](https://github.com/laserlemon/figaro)
* [BCrypt](https://github.com/codahale/bcrypt-ruby)

## Todos
- [ ] Implementation of user and board follows
- [ ] Explore
- [ ] Search
- [ ] Notifications
