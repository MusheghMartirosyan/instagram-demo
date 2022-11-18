import { fetchUsers } from "./usersApi";
import uniqid from 'uniqid'
const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'users',
    initialState: {
        userData: [],
        currentUser: null,
        botMess: null
    },
    reducers: {
        toggleCurrentUser(state, {payload}) {
            state.currentUser = state.userData.find(user => (user.email === payload.login || user.username === payload.login) && user.password === payload.password)
        },
        exitCurrentUser(state, {payload}) {
            state.currentUser = null
        },
        addNewUserPost(state, {payload}){
            let index = state.userData.findIndex(el => el.id === state.currentUser.id)
            state.currentUser.posts.unshift({
                ...payload,
                comments: []
            })
            state.userData[index].posts.unshift({
                ...payload,
                comments: []
            })
        },
        addMesseges(state,{payload}) {
            state.currentUser.messages = [
                ...state.currentUser.messages,
                    {
                        id: uniqid(),
                        user: state.currentUser.username,
                        txt: payload
                    },
                    {
                        id: uniqid(),
                        user: 'instabot',
                        txt: state.botMess
                    }
            ]
        },
        addBotMess(state, {payload}) {
            switch (payload) {
                case 'hello':
                    return{
                        ...state,
                        botMess: `Hello ${state.currentUser.username}`
                    }
                default:
                    return{
                        ...state,
                        botMess: `es qez chem haskanum`
                    }
            }
        },
        delUserPost(state, {payload}){
            state.currentUser.posts = [...state.currentUser.posts.filter(post => post.id !== payload)]
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                userData: [...payload]
            }
        },
    }
})

export const selectUsers = state => state.users
export const { toggleCurrentUser, exitCurrentUser, addNewUserPost, delUserPost, addMesseges, addBotMess } = userSlice.actions
export const usersReducer = userSlice.reducer