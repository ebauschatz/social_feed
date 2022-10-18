import React, { useState } from 'react';
import Post from './Components/Post/Post';


function App() {
  const [posts, setPosts] = useState([{userName: 'Emily B', postText: 'This is a sample post.'}]);

  return (
    <div>
      <Post userName={posts[0].userName} postText={posts[0].postText} />
    </div>
  );
}

export default App;