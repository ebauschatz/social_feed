import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import './App.css';


function App() {
  const [posts, setPosts] = useState([{userName: 'Emily B', postText: 'This is a sample post.'}, {userName: 'Rachel M', postText: 'This is a way cooler sample post.'}]);

  function addNewPost(newPost) {
    let tempPosts = [newPost, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavBar />
      </div>
      <div className='row justify-content-center background-blue full-height'>
        <div className='col-8'>
          <CreatePostForm addNewPost={addNewPost}/>
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;