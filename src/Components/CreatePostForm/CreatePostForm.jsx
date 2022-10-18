import React, { useState } from 'react';

const CreatePostForm = (props) => {
    const [userName, setUserName] = useState("");
    const [postText, setPostText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {userName: userName, postText: postText};
        props.addNewPost(newPost);
        setUserName("");
        setPostText("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <span>Name</span>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}></input>
            <span>Post</span>
            <input type="text" value={postText} onChange={(event) => setPostText(event.target.value)}></input>
            <button type="submit">Create</button>
        </form>
    );
}
 
export default CreatePostForm;