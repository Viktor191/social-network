const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        {id:1, message:'Hi, how are you?', like:41},
        {id:2, message:'It is my first post', like:8},
        {id:3, message:'Test post', like:14},
    ],
        newPostText:'Test text from state 2',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }

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

export default profileReducer;