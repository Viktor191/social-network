import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={classes.mainImage}>
                <img src='https://car-images.bauersecure.com/wp-images/2709/04-audi-rs3lms.jpg'/>
            </div>
            <div className={classes.avatar}>
                <img src='https://c4.wallpaperflare.com/wallpaper/146/911/592/audi-headlight-abbot-sportback-rs7-hd-wallpaper-preview.jpg'/>
                ava+description
            </div>
            <MyPosts />
            Main content
        </div>
    )
}
export default Profile;