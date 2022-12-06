import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
            profilePage: {
            posts: [
                {id:1, message:'5555555?', like:41},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },
}

export default store;
window.store = store;

