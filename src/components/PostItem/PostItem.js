import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import { BsBookmark, BsEmojiSmile } from "react-icons/bs";
import Comments from "../Comments/Comments";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/slices/users/usersSlice";
import { addNewComment } from "../../store/slices/posts/postsSlice";

const PostItem = ({username, id, img, desc, comments}) => {
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    
    const dispatch = useDispatch()
    return (
        <>
        <div className="posts">
            <div className='post-info'>
                <img src={img} />
                <span>{username}</span>
                <span className='info-menu-btn '><HiOutlineDotsHorizontal /></span>
            </div>
            <div className='post img'>
                <img src={img} />
            </div>
            <div className='post-icons'>
                <span><AiOutlineHeart /></span>
                <span><BiMessageRounded /></span>
                <span><TbSend /></span>
                <span className='save-post-btn'><BsBookmark /></span>
            </div>
            <p className='likes'>{Math.floor(Math.random() * 10000000)} likes</p>
            <div className='post-comments'>
               {desc && <><span>{username}</span> <p>{desc}</p></>} <br/>
                <Comments comments={comments} />
                
            </div>
            <div className='comment'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (formRef.current[0] !== '') {
                        dispatch(addNewComment({txt: formRef.current[0].value, username: currentUser.username, id}))
                    }
                    formRef.current.reset()
                }} 
                ref={formRef} 
                className='comment-form' >
                    <BsEmojiSmile className='comment-smile' />
                    <input type='text' placeholder='Add a comment...' />
                    <button>Post</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default PostItem