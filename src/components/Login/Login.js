import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/slices/users/usersApi'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import './Login.css'

const Login = () => {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()
    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
        }else{
            navigate('/')
        }
    }, [currentUser])
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return(
        <div className="Login">
            <img className='logo' 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="Logo" />
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                let login = formRef.current[0].value
                let password = formRef.current[1].value
                if (login && password) {
                    dispatch(toggleCurrentUser({login, password}))
                    
                }
                formRef.current.reset()
                
            }}>
                <input defaultValue='bret' type='text' placeholder="Phone number, username or email adress" /> 
                <input defaultValue='gwenborough' type='password' placeholder='Password' />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login