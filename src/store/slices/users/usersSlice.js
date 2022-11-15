import { fetchUsers } from "./usersApi";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'users',
    initialState: {
        userData: [],
        currentUser: null
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
export const { toggleCurrentUser, exitCurrentUser, addNewUserPost, delUserPost } = userSlice.actions
export const usersReducer = userSlice.reducer