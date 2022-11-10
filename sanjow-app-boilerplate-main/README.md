# Sanjow App

## INFO

#### This assignment is to be done only by you, not as a team, much less done by someone else
#### You are free to use any resource that might help you to achieve the results desired
#### Read carefully each point of the assignment
#### Almost all points are dependent on the point before, so try to not step over
#### If you get stuck in one point, and can not get over it, please contact us ASAP

---

## PREREQUISITES

* Before begin have knowledge or be familiar with:
   * [NodeJS](https://nodejs.org/en/download/)
   * [GIT](https://git-scm.com/)
   * [Github](https://github.com)
   * [Vercel](https://vercel.com)
   * [NextJS](https://nextjs.org)
   * [Chakra UI](https://chakra-ui.com)
   * [REQRES Rest API](https://reqres.in)
* A PC running Linux (preferably), Windows or a Mac running MacOSX (preferably)
* Connection to the internet
* [NodeJS](https://nodejs.org/en/download/) installed in your system
* [GIT](https://git-scm.com/) installed in your system
* Other tools/software that you may consider important to complete the assignment
* Personal [Github](https://github.com) Account
* Personal Free [Vercel](https://vercel.com) account

## ASSIGNMENT

Your assignment is based on a [NextJS](https://nextjs.org/) framework boilerplate

1. Task 0 - First Steps
   1. Clone [THIS REPOSITORY](https://...) into your own machine 
   2. Test if the App is running properly
   3. Create a private GIT repository in your Github Account and use it as remote
   4. Create a new Project in your Vercel account to deploy the App
   5. Link your Github repository to your Vercel account - [Read the DOCS](https://vercel.com/docs)
   6. Share your Github private repository and Vercel production link
2. Task 1 - User's page
   1. Create a new git branch based on main/master branch and call it "Task-1"
   2. Create a new page called "users"
   3. Change Homepage to your liking, so you can have a Button that redirects to the new page
   4. On "users" page:
      1. Get Users from REQRES API
      2. A title H1 using Chakra
      3. Show individual users in a squared box with:
         1. Picture avatar
         2. Full name
         3. Email
         4. Button link to an individual user page
      4. Create a pagination bar above all users, so we can:
         1. See the total of user's pages and  the current one
         2. Navigate back and forward between user pages loading the correspondent users
      5. Avoid a blank page while fetching users using your own strategy
      6. When browser refresh, maintain the user's page selected
      7. Commit and push to branch "Task-1"
      8. Merge "Task-1" into main/master but do NOT delete branch "Task-1"
3. Task 2 - Single User Page
   1. Create a new git branch based on main/master branch and call it "Task-2"
   2. Create a new page to see a single user dynamically based on the user id
   3. The single user page should use the same component used on all user's page
   4. The single user squared box should have an edit button to edit user's details
   5. Pressing the edit button should redirect to an edit user page form
   6. The page should have a link to return to see all users
   7. Merge "Task-2" into main/master but do NOT delete branch "Task-2"
4. Task 3 - Edit User Page
   1. Create a new git branch based on main/master branch and call it "Task-3"
   2. When clicking the "Edit" a form should appear like so:
      1. Fields:
         1. First name
         2. Last name
         3. Email
         4. Confirmation email
      2. All fields are mandatory
      3. Email and confirmation must match
      4. Email fields should only accept generic valid emails
      5. Submit button should only be available when all fields are valid
      6. "Edit" button inside the user box should only show "Editing user..." with no action
   3. When submitting the form, the response feedback should be shown on a toast/dialog
   4. Log the server JSON response into the console
   5. Redirect to the user (the data updated will not be shown since it is not supported)
   6. Merge "Task-3" into main/master but do NOT delete branch "Task-3"
5. Task 4 - Mimic Login system
   1. Create a new page called login
   2. This page should center form with:
      1. Email field
      2. Password field
      3. Login button
   3. Logging in should be done against REQRES Rest API
   4. On error or success show a dialog/toast information to the user
   5. On error clear the form
   6. On success, persist the token on user's browser and redirect to all users
   7. Merge "Task-4" into main/master but do NOT delete branch "Task-4"
6. Task 5 - Authorization
   1. Add a global login link
      1. Icon button style
      2. If logged in show icon to logout instead
   2. On single user page
      1. Hide "Edit" button if not logged in
      2. On clicking "Edit" button check if the user to edit corresponds to the token saved
         1. Check this using a NextJS API endpoint that:
            1. Is waiting for a Header Authorization Bearer Token
            2. Receives the email
            3. Get the user token from REQRES (using email and any string as a password)
            4. Compares it with the one received in the request and returns a valid or invalid *session*
         2. Implement the frontend UI feedback accordingly
      3. On saving after editing
         1. Migrate the "save" flow already in place to a new NextJS API endpoint
         2. API endpoint that only works with a proper Authorization Bearer token
         3. Use this API endpoint to communicate with REQRES
         4. Return the response to the frontend maintaining the functionality
   3. Merge "Task-5" into main/master but do NOT delete branch "Task-5"
7. Task 6 - Refactoring
   1. For speed and SEO Use NextJS capabilities to pre-render Users page first render
   2. Set Login page title (browser tab title) using .env file
   3. Set a super secret key/token (only available on the server) environment variable using .env file
   4. In the Login page:
      1. Get the super secret key/token
      2. Pass only the last 4 digits into the page
      3. Log it into the browser's console when loading the page
   5. Merge "Task-6" into main/master but do NOT delete branch "Task-6"

## POST ASSIGNMENT

### Well done!

#### Make sure your remote repository has all the code you produced and inform us that you have finished.

Note: Do not forget to share your Github private repository and Vercel production link

___

*Sanjow 2022*
