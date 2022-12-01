const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message:'Hi, how are you?', like:41},
                {id:2, message:'It is my first post', like:8},
                {id:3, message:'Test post', like:14},
            ],
            newPostText:'Test text from state 2',
        },
        dialogPage: {
            dialogs: [
                {id:1, name:'Dimych'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'},
                {id:4, name:'Sasha'},
                {id:5, name:'Viktor'}
            ],
            messages: [
                {id:1, message:'Hi'},
                {id:2, message:'How are you?'},
                {id:3, message:'Text'}
            ],
            newMessageBody:''
        },
        sidebar: {
            friends: [
                {id:1, name:'Dimych'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'},
            ]
        },
    }, /*свойство и его синтаксис*/

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log()
    },/* метод и его синтаксис*/
    dispatch (action) { //type: 'ADD-POST'
        if (action.type === ADD_POST ) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE ) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id:7, message: body });
            this._callSubscriber(this._state);
        }

    },
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: text
    }
}




export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}


export default store;
window.store = store;

