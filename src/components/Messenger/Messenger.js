import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectUsers } from "../../store/slices/users/usersSlice"
import Message from "../Message/Message"
import MessengerForm from "../MessengerForm/MessengerForm"
import './Messenger.css'

const Messenger = () => {
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
    return (
        <>
        <div className="messenger">
            <Message />
            <Message />
            <Message />
            <Message />
            <MessengerForm />
        </div>
        </>
    )
}

export default Messenger