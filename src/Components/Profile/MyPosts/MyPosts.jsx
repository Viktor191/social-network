import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} id={post.id}/>)

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);// возможно неправильное название updateNewPostText !!!
    }
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;
