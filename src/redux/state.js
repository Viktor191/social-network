let rerenderEntireTree = () => {
    console.log()
}
let state = {
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
    },
    sidebar: {
        friends: [
            {id:1, name:'Dimych'},
            {id:2, name:'Andrey'},
            {id:3, name:'Sveta'},
        ]
    },
}

window.state = state;
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {

    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;