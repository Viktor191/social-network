import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = [
        {id:1, message:'Hi, how are you?', like:41},
        {id:2, message:'It is my first post', like:8},
    ]
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Post message={postData[0].message} like={postData[0].like} id={postData[0].id}/>
            <Post message={postData[1].message} like={postData[1].like} id={postData[1].id}/>
        </div>
    )
}
export default MyPosts;