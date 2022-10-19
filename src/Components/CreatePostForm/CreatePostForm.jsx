import React, { useState } from 'react';
import './CreatePostForm.css'

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
        <form onSubmit={handleSubmit} className='form-grid create-post-form-container'>
            <div className='form-group row align-items-center text-muted'>
                <label className='col-sm-2 col-form-label'>Name</label>
                <div className='col-sm-7'>
                    <input type="text" className="full-width rounded-input-corner" value={userName} onChange={(event) => setUserName(event.target.value)}></input>
                </div>
            </div>
            <div className='form-group row'>
                <label className="col-sm-2 col-form-label text-muted">Post</label>
                <div className='col-sm-7 pt-2'>
                    <textarea className='no-resize full-width rounded-input-corner' value={postText} onChange={(event) => setPostText(event.target.value)}></textarea>
                </div>
                <div className='col-sm-3 d-flex align-items-end pb-1'>
                    <button type="submit" className="create-post-button">Create</button>
                </div>
                
            </div>
        </form>
    );
}
 
export default CreatePostForm;