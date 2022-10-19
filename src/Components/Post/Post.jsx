const Post = (props) => {
    return (
        <div className="border-bottom p-2 px-4">
            <div>
                <b>{props.userName}</b>
            </div>
            <div className="py-1">
                {props.postText}
            </div>
            <div className="d-flex justify-content-end">
                <i className="fa fa-thumbs-down px-1"></i>
                <i className="fa fa-thumbs-up px-1"></i>
            </div>
        </div>
    );
}
 
export default Post;