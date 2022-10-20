import './Post.css'
import React, { useState } from 'react';


const Post = (props) => {
    const [likeReaction, setLikeReaction] = useState("fa fa-thumbs-up px-1 no-reaction");
    const [dislikeReaction, setDislikeReaction] = useState("fa fa-thumbs-down px-1 no-reaction")

    function handleLikeClick() {
        if (likeReaction === "fa fa-thumbs-up px-1 no-reaction" && dislikeReaction === "fa fa-thumbs-down px-1 dislike-reaction") {
            setLikeReaction("fa fa-thumbs-up px-1 like-reaction");
            setDislikeReaction("fa fa-thumbs-down px-1 no-reaction");
        }
        else if (likeReaction === "fa fa-thumbs-up px-1 no-reaction") {
            setLikeReaction("fa fa-thumbs-up px-1 like-reaction");
        }
        else {
            setLikeReaction("fa fa-thumbs-up px-1 no-reaction");
        }
    }

    function handleDislikeClick() {
        if (dislikeReaction === "fa fa-thumbs-down px-1 no-reaction" && likeReaction === "fa fa-thumbs-up px-1 like-reaction") {
            setDislikeReaction("fa fa-thumbs-down px-1 dislike-reaction");
            setLikeReaction("fa fa-thumbs-up px-1 no-reaction");
        }
        else if (dislikeReaction === "fa fa-thumbs-down px-1 no-reaction") {
            setDislikeReaction("fa fa-thumbs-down px-1 dislike-reaction");
        }
        else {
            setDislikeReaction("fa fa-thumbs-down px-1 no-reaction")
        }
    }

    return (
        <div className="border-bottom p-2 px-4">
            <div>
                <b>{props.userName}</b>
            </div>
            <div className='date-time-font'>
                {props.postDate}
            </div>
            <div className="py-1">
                {props.postText}
            </div>
            <div className="d-flex justify-content-end">
                <i className={likeReaction} onClick={handleLikeClick}></i>
                <i className={dislikeReaction} onClick={handleDislikeClick}></i>
            </div>
        </div>
    );
}
 
export default Post;