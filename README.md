# JM-MVC-Tech-Blog
### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As a developer that loves to write about technologies, it's important to have an outlet that allows you to express your opinions and thoughts to a community that has the same interests as you. To fulfill this need, I've developed a tech blog application that leverages a custom REST API built with Sequelize and MySQL. This application enables users to create accounts, explore posts, engage with content via commenting, and even publish their own blogs.

## Table of Contents

- [Title](#jm-mvc-tech-blog)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Either: 

1. Clone the repo and open in VS Studio, seed database before running the server.

2. Click on the deployed application link.

## Usage

Upon visiting the website for the first time, users are directed straight to the homepage. The homepage has a simple structure consisting of a prominent header and a main body.

The header features the title "Tech Blog" alongside three inviting yellow buttons. The "Home" button redirects users to the '/home' path in the application's URL, regardless of which page they are on. The "Login" and "Sign Up" buttons take users to the corresponding '/login' and '/sign-up' pages for authentication.

Moving down to the body of the homepage, if a user is logged out, they will see a prompt indicating that they must log in to make comments or posts. Below this prompt is a gray-accented section that displays all posts from the database, ordered from newest to oldest. Each post includes the name of the user that posted it, a custom title, a custom description, and the date it was posted.

One of the key features of the Tech Blog is the ability to interact with posts. Even when logged out, users can click on a post's title or description to view more details. Clicking on a post triggers a GET request to '/home/posts/id', where 'id' represents the post's unique id, and redirects the user to the specific post's page.

Upon reaching a specific post page, users can explore the post in more detail. The layout is similar to the '/home' page, but with the addition of "Make Comment" and "Comment Section" tabs. If a user is logged out, the comment button is disabled, and a prompt encourages them to log in to interact. However, users can still view all comments related to the post and click on a user's name to see their posts.

If users want to log in or sign up, they can do so by clicking the respective buttons in the header. These actions redirect them to the login or signup pages. Both pages work similarly, with the exception that entering incorrect details in the login screen prevents successful login. When a user's username and password are successfully authenticated, the passwords are hashed for security, and the user is redirected to '/home'.

In the logged-in version of '/home', the login and signup buttons change to a single "Logout" button, and a new "Dashboard" button appears. The earlier prompt reminding users to log in disappears. Users can click on a post, and on the specific post page, they are now able to comment. Instead of the comment prompt, there's a "Comment as (your user here)" button. When clicked, it activates a Bootstrap collapse module to display a comment input box and a comment post button. Users can enter their comments, and upon submission, a POST request is sent with the comment details, user id, and post id to a cutom api route. The page reloads upon success, and users can see their comment at the bottom of the thread.

Clicking on the "Dashboard" button in the header redirects users to '/dashboard'. Here, they can view all posts they've created, identified by their user ID from login/signup. Each post has the same click functionality as the main homepage, with two significant additions: the edit and delete buttons. Users can edit a post by clicking the edit button, which opens a Bootstrap modal. This modal displays the post's title and description for easy editing. After making changes and clicking "Save Changes," a PUT request updates the post with the new information. If successful, the page reloads, displaying the edited post. To delete a post, users can click the yellow trash can button, which sends a DELETE request and refreshes the page if successful.

Above the owned post section in the dashboard is the "Create Post" section. It includes a prompt that says, "Got something to share?" followed by a "Make a new post" button. Clicking this button activates a Bootstrap collapse module, revealing input fields for the post title and description. This works similarly to the edit inputs. After entering information and clicking "Post," a POST request is made to the post api, creating a new post with the user's information. If successful, the dashboard reloads, displaying the newest post at the top.

Once the user has had their fill of tech shenanigans, they may click on the 'Logout' button, which destroys their current session, and redirects them back to '/home' without an account, where they'll be able to view posts and comments, but not comment themselves or make any posts.

Deployed application:
https://young-fjord-62877-0480c683a0c0.herokuapp.com/home

Github Repo: 
https://github.com/jujusoi/JM-MVC-Tech-Blog

## Features

- Presented with homepage which includes preexisting posts, navigation links for 'home', 'login', 'sign-up', 'logout', and 'dashboard' dependant on session status.
- Clicking on the homepage button redirects the user to '/homepage'.
- Clicking on any navigation buttons redirects to their corresponding path. 
- When sent to '/sign-up' users are prompted to create a username and password.
- Clicking on 'create an account' saves user credentials and logs the user into the site.
- Choosing to sign-in (LOGIN) at a later time with the same credentials logs the user into the site under the same account.
- Navigation buttons in the header change dependant on session state (logged in or logged out).
- Homepage posts include post title, post description, the user that posted it, and the date it was posted.
- Clicking on an existing blog post will redirect the user to that specific post through the URL path, where aforementioned post details are shown with the inclusion of a new comment button and comment section.
- Clicking comment button displays inputs, and when entered, will save the comment and reload the page, displaying content such as the user that posted it, comment date, and comment description.
- Clicking on the dashboard button in navigation will send the user to '/dashboard', rendering all their specific posts. Has same click functionality as homepage.
- Dashboard includes option to make new post through collapse, which prompts both a title and description for input. Clicking submit will reload page with the newest post on the top.
- Clicking on either the edit or delete buttons on each specific post allows the user to edit title/description contents or delete the post entirely.
- Clicking on the logout button in navigation will sign the user out and destroy their session. Redirects back to '/home'.
- Session will destroy itself after an hour.
- Clicking on user names will display their posts even outside of dashboard. If user's id matches the id clicked on, custom prompts will be rendered to better suit user experience.
- Responsive design.

## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  