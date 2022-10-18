import React, { useState } from 'react';
import PostList from './Components/PostList/PostList.jsx';


function App() {
  const [posts, setPosts] = useState([{userName: 'Emily B', postText: 'This is a sample post.'}, {userName: 'Rachel M', postText: 'This is a way cooler sample post.'}]);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default App;