import { configureStore } from "@reduxjs/toolkit";
import { searchRreducer } from "./search/searchSlice";
import { postsReducer } from "./slices/posts/postsSlice";
import { usersReducer } from "./slices/users/usersSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        search: searchRreducer,
        users: usersReducer
    }
})

export default store