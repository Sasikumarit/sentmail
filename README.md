# SentMail

SentMail used to Add the User(firstname,lastname,email,age) data, Sending to Mail with added user details in the database and Monitor the Sending Mail Log History.

## SentMail Debug Script
npm start (or) node server.js

## SentMail API

- `POST - http://localhost:8080/api/user/` Create Record
- `GET -http://localhost:8080/api/users` Fetch ALL Records
- `GET - http://localhost:8080/api/user/2` Fetch Single Record
- `POST - http://localhost:8080/api/sentmail` Sent Mail
