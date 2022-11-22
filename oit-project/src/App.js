import React, { useState, useEffect } from 'react';
import PostsPage from './Components/Pages/PostsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostHighlightPage from './Components/Pages/PostHighlightPage';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_KEY);
      setPosts(res);  // you need to add the correct access data points depending on what is avaliable from api key.
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PostsPage posts={posts} />} />
        <Route path='/posts/:id' element={<PostHighlightPage posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;

