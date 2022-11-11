import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src='https://assets.turbologo.ru/blog/ru/2019/12/18163124/audi-emblem-958x575.png'/>
            </div>
        </header>
    )
}
export default Header;