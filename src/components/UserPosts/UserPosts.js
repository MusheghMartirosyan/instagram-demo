import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { delPost } from '../../store/slices/posts/postsSlice'
import { delUserPost, selectUsers } from '../../store/slices/users/usersSlice'
import './UserPosts.css'



const UserPosts = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector(selectUsers) 
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    },[currentUser])
    const dispatch = useDispatch()
    return (
        <>
        {
            currentUser?.posts.map(post => (
                <div className='user-posts' key={post?.id}>
                    <span onClick={() => {
                        dispatch(delPost(post?.id))
                        dispatch(delUserPost(post.id))
                    }} 
                    className='del-post'>X</span>
                    <img  style={{width: '290px'}} src={post?.img} alt='' />
                </div>
            ))
        }
          </>
    )
        
}

export default UserPosts