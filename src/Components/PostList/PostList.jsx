import Post from '../Post/Post'

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => <Post userName={post.userName} postText={post.postText}/>)}    
        </div>            
    );
}
 
export default PostList;