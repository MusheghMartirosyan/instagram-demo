import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsApi";

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addNewComment (state, {payload}) {
            let index = state.findIndex(post => post.id === payload.id)
            state[index].comments.push({
                id: new Date().getTime().toString(),
                username: payload.username,
                body: payload.txt
            })
        },
        addNewPost(state, {payload}){
            state.unshift({
                ...payload,
                comments: []
            })
        },
        delPost(state, {payload}){
            return[
                ...state.filter(post => post.id !== payload)
            ]
        }
    },
    extraReducers: {
        [fetchPosts.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

export const selectPosts = state => state.posts
export const {addNewComment, addNewPost, delPost} = postsSlice.actions
export const postsReducer = postsSlice.reducer