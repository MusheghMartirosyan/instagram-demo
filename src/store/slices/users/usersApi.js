import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/photos')
        const postsData = responsePosts.data
        const data = response.data.map(user => ({
            id: user.id,
            email: user.email.toLowerCase(),
            username: user.username.toLowerCase(),
            about: user.company.catchPhrase,
            password: user.address.city.toLowerCase(),
            name: user.name,
            messages: [],
            posts: postsData.filter(post => post.albumId === user.id).map(post => ({
                id: post.id,
                img: post.url,
                username: post.title.slice(0, post.title.indexOf(' ')),
                desc: post.title,
                comments: []
            }))
        }))
        return data
    }
)