import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <div><button>Add post</button></div>
            </div>
            <Post message='Hi, how are you?' like='41'/>
            <Post message='It is my first post' like='8'/>

        </div>
    )
}
export default MyPosts;