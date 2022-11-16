import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id:1, message:'Hi, how are you?', like:41},
        {id:2, message:'It is my first post', like:8},
        {id:3, message:'Test post', like:14},
    ]
let postsElements = posts.map(post => <Post message={post.message} like={post.like} id={post.id}/>)
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