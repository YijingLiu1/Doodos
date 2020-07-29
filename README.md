# GroupProject-ArchiTech
## Doodos

### UI

### API

The structure of the api referenced this source code
api_design_reference: https://github.com/bradtraversy/devconnector_2.0
commit history of api before July 22 2020 can be found: https://github.com/hyudundee/mern-stack-doodos

###Schema Design

User includes: String {name, location, ticket, host}, Date{from, to, date} Boolean{ticket}
Profile              => String {user, bio, status, location, website, }, Date{from, to, date} Boolean{ticket}, List{skills, experience, social}
User                 => String {name, email, password, avatar}, Date{date}
Post                 => String {name, text, user, avatar}, Date{date} List{comments, likes}
Group                => String {name}, Date{date}, List{users}
Event                => String {name, location, ticket, host}, Date{from, to, date} Boolean{ticket}
ShoppingItem         => String {name, price, amount, retailer}, Date{date} Boolean{available}, list{delieverymethod}
Trolly               => String {user, sum},List{buyings}


Event                => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Event.js
Group                => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Group.js
Post                 => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Post.js
Profile              => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Profile.js
User                 => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/User.js
ShoppingItem         => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/ShoppingItem.js
Trolly               => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Trolly.js

###Package Installed

####dependencies

bcrypts              => encrypt and decrypt user password
config               => set up connection to Atlas and other default settings
mongoose             => connect to database and create schema, provides object relational map
express              => Backend framework
jsonwebtoken         => generate token to validate user login status
express-validator    => validate user info inlcuding token and input
gravatar             => used to get user profile(connected with google)

####dev-dependencies

nodemon              => to watch and run program after a change is saved
concurrently         => run 'npm start' command concurrently

### screenshots

User register and authentication

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/register-user-da-vincci-and-get-token.png)
register-user-da-vincci-and-get-token

![login-use-generated-token-to-get-user](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/login-use-generated-token-to-get-user.png)
login-use-generated-token-to-get-user

![login-user-send-email-not-exist-to-auth.png](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/login-user-send-email-not-exist-to-auth.png)
login-user-send-email-not-exist-to-auth

![login-user-send-valid-credentials-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/login-user-send-valid-credentials-and-get-token.png)
login-user-send-valid-credentials-and-get-token

![mongodb-user.png](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/mongodb-user.png)
mongodb-user

![postman-auth-test](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/postman-auth-test.png)
postman-auth-test

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/user-register-authentication/register-user-da-vincci-and-get-token.png)
register-user-da-vincci-and-get-token

Profile

![crerate-update-profile-01](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/profile/crerate-update-profile-01.png)
crerate-update-profile-01

![crerate-update-profile](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/profile/crerate-update-profile-02.png)
crerate-update-profile-02

![crerate-update-profile-03-mongodb-updated.png](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/profile/crerate-update-profile-03-mongodb-updated.png)
crerate-update-profile-03-mongodb-updated

![delete-comment.png](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/posts/delete-comment.png)
delete-comment

![15 deployment.png](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/posts/post-comment.png)
post-comment

full images can be found here: https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/tree/master/api/readme-images
