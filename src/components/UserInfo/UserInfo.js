import { useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './UserInfo.css'


const UserInfo = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector(selectUsers)
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
    
    return (
        <div className='user-info'>
            <img className='user-img' src='https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg'/>
            <div className='user-name'>
                <span>{currentUser?.username}</span>
                <FiSettings />
            </div>
            <ul>
                <li><b>{currentUser?.posts.length}</b>post</li>
                <li><b>254</b>Followers</li>
                <li><b>318</b>Following</li>
            </ul>
            <div className='user-bio'>
                <b>{currentUser?.name}</b>
                <span>Useri bio, inch uzi kara gri</span>
            </div>
        </div>
    )
}

export default UserInfo