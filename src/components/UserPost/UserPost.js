import { GrGrid } from "react-icons/gr";
import { BsBookmark } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import UserPosts from "../UserPosts/UserPosts";
import './UserPost.css'

const UserPost = () => {
    return (
        <div>
            <div className="user-post-icons">
                <span><GrGrid /> Posts </span>
                <span><BsBookmark /> Saved </span>
                <span><BiUserPin /> Tagged</span>
            </div>
            <div className="user-post">
                <UserPosts />
            </div>
        </div>

    )
}

export default UserPost