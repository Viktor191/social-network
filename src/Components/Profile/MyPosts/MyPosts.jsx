import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} id={post.id}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text });*/
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;
