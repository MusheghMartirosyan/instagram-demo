import './UserPage.css'
import Highlight from '../Highlight/Highlight'
import UserInfo from '../UserInfo/UserInfo'
import UserPost from '../UserPost/UserPost'

const UserPage = () => {

    return (
        <>
        <div className='user-page'>
            <UserInfo />
            <div className='highlights'>
                <Highlight />
                <Highlight />
                <Highlight />
                <Highlight />
                <Highlight />
            </div>
            <UserPost />
        </div>
        </>
    )
}

export default UserPage