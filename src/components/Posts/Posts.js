import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch } from '../../store/search/searchSlice'
import { fetchPosts } from '../../store/slices/posts/postsApi'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import PostItem from '../PostItem/PostItem'
import './Posts.css'


const Posts = () => {

    const post = useSelector(selectPosts)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!post.length) {
            dispatch(fetchPosts())
        }
    }, [])
    const search = useSelector(selectSearch)
    const filteredPosts = useMemo(() => {
        if (!search.replaceAll(" ", '')) {
            return [...post]
        }else{
            return [
                ...post.filter(el => el.username.includes(search.replaceAll(' ', '')))
            ]
        }
    }, [post, search])

    return(
        <>
        {
            filteredPosts.map(el => (
                <PostItem key={el.id} {...el} />
            ))
        }
        
        </>
    )
}

export default Posts

