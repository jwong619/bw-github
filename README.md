# bw-github

Application that displays the top 100 most starred github repositories and their corresponding top contributors.(github API - user must get another token for github api or edit code in server/index.js to use api without a token)

Author : Julia Wong


## Tech Stack

- Redux
- React
- Boostrap
- Node
- Express
- Axios
- PostgreSQL
- Webpack
- Github API

React and Redux - Optimize data flow of application with React and Redux. With flux architecture there is easier access to app data from every component. This will help in the future if developer decides to add more features and build more components.
Reusable components save time.

Express and axios on server side handled asynchronous requests nicely and kept code looking clean and readable. Set up services in the future to handle grabbing data through GITHUB API in portions and store to DB so that the app always has an updated accurate list. *check GITHUB might cache some of their data, and are not current.

DB - Postgresql over Mongo in order to improve data storage - if developer chooses to optimize app by building services to get all repositories and keep unique storage of repos. Postgresql also allows for relational data designs for other features. However, mongo would have been fine for this smaller app. Possibly switch to ORM vs SQL to condense code or for developer/team preferences. Definitely can also move all queries into a different file and call to queries to clean up code.



## Possible future features

- add a search feature for user to get all repositories from a specific user (would have to design the UI differently, top 100 starred repositories would be a small feature of many)

- change views feature to display diffrent repo lists

- saved list feature - user would be able to create unique repo lists *favorites


## Fix bug issues

- some latency through API calls, future feature to set up services
- clean up styling
- API return max list of 30, * check page params to get 100
