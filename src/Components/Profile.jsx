import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mainImage}>
                <img src='https://car-images.bauersecure.com/wp-images/2709/04-audi-rs3lms.jpg'/>
            </div>
            <div className={classes.avatar}>
                <img src='https://c4.wallpaperflare.com/wallpaper/146/911/592/audi-headlight-abbot-sportback-rs7-hd-wallpaper-preview.jpg'/>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
                <div className={classes.item}>
                    post 3
                </div>
            </div>
            Main content
        </div>
    )
}
export default Profile;