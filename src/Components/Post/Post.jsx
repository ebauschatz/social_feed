const Post = (props) => {
    return (
        <div>
            <div>
                <b>{props.userName}</b>
            </div>
            <div>
                {props.postText}
            </div>
            <div>
                <i class="fa fa-thumbs-up pull-right"></i>
                <i class="fa fa-thumbs-down pull-right"></i>
            </div>
        </div>
    );
}
 
export default Post;