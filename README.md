# OIT-Project

The aim of this project is to create an application that makes Instagram more accessible for users with disabilities by simplifying the user interface so that users can interact and view Instagram content more easily. 

## Front End Development Options

I have chosen to use the ReactJS library to build and create the user interface. The pros of using this method are the fast user interface, reusable code, single page applications can be created, and only the parts of the library that are needed can be extracted. Some potential issues could be that this requires specialist knowledge to use it effectively, and I will be unable to perform 'business logic' actions within the application. 

## Building an app with React. 

- [X] Start with a mock. 
- [X] Break the UI into a component hierarchy. 
- [X] Build a Static version in React.
- [X] Identify the minimal (but complete) representation of UI state. 
- [X] Identify where your state should live. 
- [X] Add inverse data flow. 

### Start with a Mock

My mock was developed using Webflow. It is a basic example of what I would like the application to look like. 

![Webflow](../oit-project/src/images/webflow.jpg)

### The Component Hierarchy

Each component in the mock is taken out and given a name to help identify components which should only do one thing. 

- User Name
- Instructions and tips on using the site. 
- Image
- Image name
- Image caption

## User Story

As a user, I want to be able to access an online application that allows me to view a simplified Instagram feed, so that I can use it more easily

### Epic Breakdown - Front End

As the PRESENTATIONAL LAYER, I want to be able to request data from the BUSINESS LAYER, so that I can display it.

#### Further Epic Breakdown - Front End

1. As the PRESENTATIONAL LAYER, I want to be able to display pictures in a 'feed' UI, so that the user is able to see all the pictures.

- [X] Get a ReactJS application up and running.
- [X] Build and Serve and Application. 
- [X] Display and image on the webpage.

2. As the PRESENTATIONAL LAYER, I want to be able to display each picture with a user name, so that I can see who has posted the picture.

- [X] Each picture is displayed with a username. 


3. As the PRESENTATIONAL LAYER, I want to be able to display each picture with a caption, so that I can read what each picture is about.

## Step-By-Step

### Get a ReactJS application up and running. 

A ReactJS application was set up using a the node package extractor called create-react-app. Once the installation of files was completed, the application was launched in the browser to see it running.The browser opened at http://localhost:3000/ with the following screen: 

![React App](../oit-project/src/images/react-app.jpg)

### Build and serve and application. 

I produced a production-ready set of code for the skeleton application. This will make bundles of the HTML, CSS and JavaScript needed to efficiently deploy the application. 

### Display an Image on the webpage. 

First I modified the App.js file to return to the basic code. I created a Photo1 component and imported this into the App.js file. When the application is run it displays Image1. 

### Display each picture with a username. 

A username component was created. This was then imported in the the App.js file. When the application is run, it displays Image1, with the username. 

### Display each picture with a caption. 

A caption component was created. This was then imported in the the App.js file. When the application is run, it displays Image1, with the username, and the caption. So far, all of the elements have been hard coded. The website looks as shown: 

![React App](../oit-project/src/images/website.jpg)

### Create a Skeleton Screen Display

Next, I created a skeleton screen layout for my application. This was done so that if a user is waiting for the application to load, they will see the white boxes, instead of a blank screen. For this part of the project, I followed a [tutorial](https://www.youtube.com/watch?v=cg_tmJBisp8) by The Net Ninja, which is linked. The first stage was to set up the set-up. This was done by creating the components and adding some CSS styling. The next stage was to fetch data. I used [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to replicate fetching real data.  Then, I started planning the skeleton templates. I created three templates - title, text, thumbnail, and avatar which are different grey shapes for different component types. The final stage was to include a loading 'shimmer' onto the skeleton screens. This was done using CSS animations.
The loading screen now appears as shown: 
</br>
![image](https://user-images.githubusercontent.com/88347024/201534223-87c9fbcf-67c6-4b99-a605-f052ba5eedb6.png)
</br>
The loaded screen now appears as shown (with placehodlers for the image, username and caption):
</br>
![image](https://user-images.githubusercontent.com/88347024/201534237-ba419e97-7b0b-4e8f-a9fe-f196dd393046.png)

### Setting up the Instagram API

For this part of the project, I found articles published by [Ming Sheng Choo](https://cming0721.medium.com/instagram-feeds-with-instagram-api-part-1-create-app-and-token-4a91ee3bd154) extremely helpful. 

The Instagram Basic Display API allows users to get basic profile information, photos, and videos from their IG account. The API is read-only and cannot be used to format information. 

In order to use the Fb API, I needed a Facebook developer account, Instagram account and a HTTS website (that is required as I need to retrieve short live tokens for IG APIs.)

#### Create a Public Accessible HTTPS website

I began by creating a PWA React App running the command 
```
npx create-react-app oit-project --template cra-template-pwa
```
Once completed, the only files were moved into the template and the development server started with
```
npm start
```

#### Hosting on Netlify

The app is going to be hosted initially on Netlify. The repository was imported from GitHub and then deployed. 

#### Create App

I created my app in Facebook for Developers. The Instagram Basic API was generated. In the setting section, the website that I deployed from Netlify was added. 

#### Obtaining an API key

After obtaining an API key through the FB developer page, I tests the get request using postman. This showed that the caption, id, media_url and username keys were functioning correctly. The timestamp key for some reason wasn't working. So this was removed from the API Key for now. 

#### Using the API Key
The API key was successfully incorporated into the application, it currently shows the first 3 pictures from the test Instagram page. The next step is to also show the caption, and username from the test Instagram page. 

#### Style

The design elements in my project were done using [Bootstrap](https://getbootstrap.com/). 