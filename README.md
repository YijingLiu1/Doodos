# GroupProject-ArchiTech
## Doodos
Team Member: Yijing Liu, Haoran Yu

## Iter 2

By the end of Iteration 1, UI and API are only connected through Sign In API. 
After Iteration 2, most UI components now connects to data on MongoDB through APIs including users, events, posts, products, etc.. 

### UI - Yijing Liu

Deployed UI Link (Might take a while for data from database to load): https://doodos-ui.herokuapp.com/

UI structure designed based on the textbook sourcecode along with other tools including:
* __"react-Dropzone"__, __"superagent"__ are used in "PostAddNavItem" component for uploading artworks of the post.
* __"react-pro-sidebar"__ is used as a category bar in Category page.

#### UI Design




### API - Haoran Yu

Deployed APP Link (api database connected): https://doodos-ui.herokuapp.com/

### Changes to the app

After the iter 1, in the sake of conveniency, the __Trolly.js__ schema is renamed to __Cart.js__, __shoppingItems.js__ to __product.js__.

Group is replaced by favoriteCategories in users' profiles, where user could add different categories to their favorites to filter the posts they are exposed to. 

### Heroku deloyment

For conveniency of deployment api/config/default.js is replaced by api/.env. This is also reflected in package.json besides config, the dotenv package is also installed.



### In the Social part, user could:

* In the line Store ,various products is provided to the users, inluding the tickets for events.

* Create post with image and text they want to share with the community.

* Choose a category their posts belongs to

* Filter posts by their categories

* Retrieve and update their post after it is created

* like other people's posts, (CRUD support, user either create, retrieve, update or delete the info)

* comment below other people's posts, (CRUD support, user either create, retrieve, update or delete the info)

* Follow people they are interested in, the data is stored in their user information.

* Set their favorite categories of post in their profile, where they could have shortcut for posts filtered by the category.



### In the Online store part, user could:

* Get all kinds of products and choose what they want to buy.

* If there is no more product in the store, user will be notified when adding that product

* If there is no more product in the cart to remove, user will also be notified when they are trying to remove

* If one product's amount is reduced to 0, it will be removed from the cart

* Get any product's detailed info by get by its Id

* Add, different products to their cart. And after every move, the new total sum ,the number of products in user's cart and the online store will all get updated in no time

* Delete different products to their cart. And after every move, the new total sum ,the number of products in user's cart and the online store will all get updated in no time


![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/onlinestore/add-item-to-cart1.png)

add-item-to-cart


### In the Online Events, user could:

* Register an event and they place will be reserved

* Buy the ticket by clicking the link and get redirected to the online store page

* View the total number of places remained and people's avatars who get registered.



### Data fufillment and User relation set up

To functionalize the app and test it, vivid user datas and profiles, and infos are generated manually. In a total of 20 users, 20 profiles, 23 posts, 9 products and 3 events 1 cart are created for this web app.

Below is a snapshot of the data example


![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/supplement%20for%20iter2/cart-data-example.png)

cart-data-example

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/supplement%20for%20iter2/event-data-type.png)

event-data-example

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/supplement%20for%20iter2/post-data-example.png)

post-data-example

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/supplement%20for%20iter2/product-example.png)

product-example

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/supplement%20for%20iter2/profile-data-example.png)

profile-data-example

![register-user-da-vincci-and-get-token](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/readme-images/supplement%20for%20iter2/user-data-example.png)

user-data-example


At the next stage, a final checkout and pay method of either Paypal or Alipay will be added to the app, where the user could pay their purchases and finish the shopping process. And we will also try to add google map api to this app, besides improving the backend objects, schemas and routes extra to improve the app.


## Iter 1

Our team is trying to build a platform for artists and graffiti lovers to communicate and share their works. The website is expected to have __Discover__ page for viewing posts and events, __Groups__ page to join groups and communicate, __DoodleMaps__ page to let users view posts by location, and __Store__ page for users to purchase tools and merchandises.

For Iteration 1, the work has been divided into UI part and API part. Yijing Liu works on the UI; Haoran Yu works on the API. 

### UI - Yijing Liu

Deployed UI Link (Sign In API not deployed): https://doodos-ui.herokuapp.com/

UI designed based on the textbook.

#### Routes

Routes so far has access to all pages on NavBar including "/discover", "/groups", "/doodlemaps", "/store", as well as subpages like "/post", "/event", "/author", "/register".

#### UI Design

* Discover page is the home page of the website, showing posts and events with links to see details.
![Discover](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Discover.JPG)

* Hover on Event Section would show description of the event with a button link to the event page.
![Event Hover](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Hover%20on%20Event.JPG)

* Events are shown in slides and can be switched with button, event details can be seen by clicking on _View More_.
![Event Detail](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Event%20Detail.JPG)

* Hover on Posts would show the title of the post, author name and like button are placed under the post.
![Post Hover](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Hover%20on%20Post.JPG)

* Author's profile can be accessed by clicking on the author name.
![User Profile](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/User%20Profile.JPG)

* Clicking on the post would pop up a modal showing the details.
![Post Detail](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Post%20Detail.JPG)

* Post details can also be shown in a single page by opening it in a new tab.
![Post Page](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Post%20Detail%20on%20Single%20Page.JPG)

* Click on __+__ button to make a new post.
![New Post](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/New%20Post.JPG)

* Sign In feature is on the NavBar. By clicking on it users can either log in with Google or Doodos acounts.
![Sign In](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Sign%20In.JPG)

* Users can go to the register page by clicking on the Sign Up link.
![Sign Up](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/Sign%20Up.JPG)

* After signed in, user name would appear on the NavBar, with a success Toast poped.
![Signed In](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/ui/readme_images/User%20Name%20and%20Toast.JPG)


### API - Haoran Yu

The structure of the api referenced this source code

api_design_reference: https://github.com/bradtraversy/devconnector_2.0

commit history of api before July 22 2020 can be found: https://github.com/hyudundee/mern-stack-doodos

### Schema Design

* User includes: String {name, location, ticket, host}, Date{from, to, date} Boolean{ticket}

* Profile              => String {user, bio, status, location, website, }, Date{from, to, date} Boolean{ticket}, List{skills, experience, social}

* User                 => String {name, email, password, avatar}, Date{date}

* Post                 => String {name, text, user, avatar}, Date{date} List{comments, likes}

* Group                => String {name}, Date{date}, List{users}

* Event                => String {name, location, ticket, host}, Date{from, to, date} Boolean{ticket}

* ShoppingItem         => String {name, price, amount, retailer}, Date{date} Boolean{available}, list{delieverymethod}

* Trolly               => String {user, sum},List{buyings}



* Event                => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Event.js

* Group                => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Group.js

* Post                 => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Post.js

* Profile              => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Profile.js

* User                 => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/User.js

* ShoppingItem         => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/ShoppingItem.js

* Trolly               => https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech/blob/master/api/models/Trolly.js


### Package Installed

#### dependencies

* bcrypts              => encrypt and decrypt user password

* config               => set up connection to Atlas and other default settings

* mongoose             => connect to database and create schema, provides object relational map

* express              => Backend framework

* jsonwebtoken         => generate token to validate user login status

* express-validator    => validate user info inlcuding token and input

* gravatar             => used to get user profile(connected with google)


#### dev-dependencies

* nodemon              => to watch and run program after a change is saved

* concurrently         => run 'npm start' command concurrently


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
