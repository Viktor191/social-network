import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        props.updateNewMessageBody(body);
        let body = event.target.value;

    }

    return (
        <div>
            <textarea ref={ newMessageElement }></textarea>
            <button onClick={ addMessage }>Add message</button>

        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange = {onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div><button onClick={ () => { onSendMessageClick()}}>Send</button></div>
                </div>
            </div>
        </div>
        </div>)
}
export default Dialogs;