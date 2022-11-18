import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
let postsElements = props.posts.map(post => <Post message={post.message} like={post.like} id={post.id}/>)
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts;