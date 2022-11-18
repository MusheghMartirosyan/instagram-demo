import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addBotMess, addMesseges, selectUsers } from "../../store/slices/users/usersSlice"
import './Messenger.css'

const Messenger = () => {
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()
    const formRef = useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }
    }, [currentUser])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addBotMess(formRef.current[0].value))
        dispatch(addMesseges(formRef.current[0].value))
        formRef.current.reset()
    }
    return (
        <>
        <div className="messenger">
            <div className="messUsers">

            </div>
            <div className="desctop">
                {
                    currentUser?.messages.map(mess => (
                        <div key={mess.id}
                        style={{
                            marginLeft: mess.user ===  'instabot' ? '50%' : ''
                        }}
                        className="messengerMess">
                            {mess.txt}
                        </div>
                    ))
                }
            </div>
            <div className="messForm">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type='txt'/>
                    <button>ok</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Messenger