import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <img src='https://c4.wallpaperflare.com/wallpaper/146/911/592/audi-headlight-abbot-sportback-rs7-hd-wallpaper-preview.jpg'/>
            </div>
            {props.message}
            <div>
                <span>like </span>
                {props.like}
            </div>
        </div>
    )
}
export default Post;