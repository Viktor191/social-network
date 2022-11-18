import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    /*let posts = [
        {id:1, message:'Hi, how are you?', like:41},
        {id:2, message:'It is my first post', like:8},
        {id:3, message:'Test post', like:14},
    ]*/
    return (
        <div>
            <div className={classes.mainImage}>
                <img src='https://car-images.bauersecure.com/wp-images/2709/04-audi-rs3lms.jpg'/>
            </div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile;