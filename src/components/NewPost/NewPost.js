import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewPost } from '../../store/slices/posts/postsSlice'
import { addNewUserPost, selectUsers } from '../../store/slices/users/usersSlice'
import './NewPost.css'

const NewPost = () => {
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
    const formRef = useRef(null)
    const dispatch = useDispatch()
    return(
        <>
        <form ref={formRef} onSubmit={(e) => {
            e.preventDefault()
            let img = formRef.current[0].value
            let desc = formRef.current[1].value
            let id = new Date().getTime().toString()
            let {username} = currentUser
            if (img) {
                dispatch(addNewPost({img, desc, id, username}))
                dispatch(addNewUserPost({img, desc, id, username}))
                formRef.current.reset()
                navigate('/')
            }
        }} 
        className="new-post">
            <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
            <input type='text' placeholder="Image adress..." /> <br/>
            <input type='text' placeholder="Description" /> <br/>
            <button>Post</button>
        </form>
        
        </>
    )
}
export default NewPost