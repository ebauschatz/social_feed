import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';


function App() {
  const [posts, setPosts] = useState([{userName: 'Emily B', postText: 'This is a sample post.'}, {userName: 'Rachel M', postText: 'This is a way cooler sample post.'}]);

  function addNewPost(newPost) {
    let tempPosts = [newPost, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList posts={posts} />
    </div>
  );
}

export default App;