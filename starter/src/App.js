// import React, { useState, useEffect } from 'react';
// import PostsPage from './Components/Pages/PostsPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PostHighlightPage from './Components/Pages/PostHighlightPage';
// import axios from 'axios';

// function App() {

//   const [posts, setPosts] = useState([]);

//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get(process.env.REACT_APP_API_KEY);
//       setPosts(res);  // you need to add the correct access data points depending on what is avaliable from api key.
//       console.log(res);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchPosts()
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<PostsPage posts={posts} />} />
//         <Route path='/posts/:id' element={<PostHighlightPage posts={posts} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import Feed from './Feed'



// const InstaFeeds = ({ token, ...props }) => {
//   const [feeds, setFeedsData] = useState([])
//   //use useRef to store the latest value of the prop without firing the effect
//   const tokenProp = useRef(token);
//   tokenProp.current = token;

//   useEffect(() => {
//     // this is to avoid memory leaks
//     const abortController = new AbortController();

//     async function fetchInstagramPost() {
//       try {
//         axios
//           .get(`https://graph.instagram.com/me/media?fields=caption,id,media_url,username&access_token=IGQVJXbm0tcE9TWW8ySkF5ZAFF5YS0zQ3AyNkZAfODhDZAm1xSGJHcndUeWtLa2tROFNNQ1Q4TU9FQmFWXzVjUFZANVGZACbWtUUFVreVd3RC10YWk3LVY5NndqVnpZAdkdEbHB2MFVGTEU1YVBPUUFNRGtSWQZDZD`)
//           .then((resp) => {
//             setFeedsData(resp.data.data)
//           })
//       } catch (err) {
//         console.log('error', err)
//       }
//     }

//     // manually call the fecth function 
//     fetchInstagramPost();

//     return () => {
//       // cancel pending fetch request on component unmount
//       abortController.abort();
//     };
//   }, [props.limit])

//   return (
//     <div className="container">
//       {feeds.map((feed) => (
//         <Feed key={feed.id} feed={feed} />
//       ))}
//     </div>
//   );
// }

// export default InstaFeeds;



import React from 'react'
import InstaFeeds from './InstaFeeds'

const App = () => {
  return (
    <>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />
    </>
  );
}

export default App;