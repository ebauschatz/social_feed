import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import './App.css';


function App() {
  let currentDateTime = new Date();
  let currentDate = currentDateTime.toLocaleDateString();
  let currentTime = currentDateTime.toLocaleTimeString();
  const [posts, setPosts] = useState([{userName: 'Emily B', postText: 'This is a sample post.', postDate: currentDate + " " + currentTime}, {userName: 'Rachel M', postText: 'This is a way cooler sample post.', postDate: currentDate + " " + currentTime}]);

  function addNewPost(newPost) {
    let tempPosts = [...posts, newPost];
    setPosts(tempPosts);
  }

  function deletePost(postIndex) {
    let tempPosts = posts.filter((post, index) => index !== postIndex);
    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavBar />
      </div>
      <div className='row justify-content-center background-blue'>
        <div className='col-8'>
          <CreatePostForm addNewPost={addNewPost}/>
          <PostList posts={posts} deletePost={deletePost}/>
        </div>
      </div>
    </div>
  );
}

export default App;