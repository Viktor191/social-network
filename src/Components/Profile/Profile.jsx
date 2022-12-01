import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


const Profile = (props) => {
    return (
        <div>
            <div className={classes.mainImage}>
                <img src='https://car-images.bauersecure.com/wp-images/2709/04-audi-rs3lms.jpg'/>
            </div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;