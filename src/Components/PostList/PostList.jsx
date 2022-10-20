import Post from '../Post/Post'
import './PostList.css'

const PostList = (props) => {
    return (
        <div className='post-list-container'>
            {props.posts.map((post, index) => <Post key={index} userName={post.userName} postText={post.postText} postDate={post.postDate}/>)}    
        </div>            
    );
}
 
export default PostList;