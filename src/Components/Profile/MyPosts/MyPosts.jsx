import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} id={post.id}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={ newPostElement }></textarea>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;
