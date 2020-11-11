Here is the version of the challenge I created. I used Expo to generate the project and 
build the framework with. I had to do a couple iterations while building this as the original 
ideas didn't work. I ended up using the Switch to switch between both components, which seems 
adequate for this example, routing probably would be more practical. I generated the Data row 
using View's and Scrollview and flex. This worked pretty well except I am still having an issue 
with scrolling I am still looking into but I wanted to get this submitted. This worked and there
is mostlikey a library that would have made this much easier. I was able to get all the data 
requested and it could be cleaned up style wise however it seems to be functioning. I am going to 
continue with it as it is a good project to learn how react differs from angular.


TO run

cd redditApp
npm i
expo start

Now you have to install expo on your phone or tablet to view the app running. 



# React Native Coding Challenge

In this challenge you're going to create a basic Reddit app with React Native.

Reddit is a news website where registered users can submit posts or links to content that other users can vote and comment. Each of these posts is grouped into categories known as "subreddits".

Your web app should list the last posts of the r/pics subreddit.

To obtain the list of posts of a subreddit use the following URL:
https://api.reddit.com/r/pics/hot.json

For more information about the JSON structure see:
https://github.com/reddit/reddit/wiki/JSON 

## Requirements:

* Show a list of the posts in the r/pics subreddit.
* Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation.
* Example layout:

  ![image](https://user-images.githubusercontent.com/636075/44457253-08f22600-a603-11e8-9df2-6db2ea49b222.png)
* Once the user taps on a post navigate to the post’s URL in a WebView.
* A brief explanation of your design and assumptions along with your code.
* The app must run on iOS (bonus points for Android).

## Notes:

* You can use any existing boilerplate to bootstrap your app, or build your app from scratch. Keep in mind that the app must be easily executable from the command line.
* Send us your code in a zip file with a README.md doc with instructions on how to run the dev environment and production builds.

Good luck!
