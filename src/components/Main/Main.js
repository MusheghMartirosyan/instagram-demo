import Storys from '../Storys/Storys'
import './Main.css'
import Posts from '../Posts/Posts'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router-dom'


const Main = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector(selectUsers)
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
    return(
        <>
        <div>
            <Storys />
            <Posts />
        </div>
        </>
    )
}

export default Main