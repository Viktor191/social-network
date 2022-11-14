import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Dimych2
                </div>
                <div className={classes.dialog}>
                    Dimych3
                </div>
                <div className={classes.dialog}>
                    Dimych4
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    message 1
                </div>
                <div className={classes.message}>
                    message 2
                </div>
                <div className={classes.message}>
                    message 3
                </div>
            </div>
        </div>)
}
export default Dialogs;