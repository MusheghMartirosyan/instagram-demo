import './Header.css'
import { BsInstagram, BsPlusSquare } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch, toggleSearch } from '../../store/search/searchSlice';
import { exitCurrentUser, selectUsers } from '../../store/slices/users/usersSlice';

const Header = () => {
    const search = useSelector(selectSearch)
    const currentUser = useSelector(selectUsers)
    const dispatch = useDispatch()
    return (
        <header>
            <NavLink to='/'>
                <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
            </NavLink>
            <input className='search' value={search} onChange={(e) => dispatch(toggleSearch(e.target.value))} type='text' placeholder='Search' />
            <ul>
                <li><NavLink to='/'><BsInstagram /></NavLink></li>
                <li><NavLink to='/messenger'><RiMessengerLine /></NavLink></li>
                <li><NavLink to='/newpost'><BsPlusSquare /></NavLink></li>
                <li><NavLink to='/userpage'><FaUser /></NavLink></li>
                <li onClick={() => dispatch(exitCurrentUser())}><NavLink to='/login'><BiLogOut /></NavLink></li>
            </ul>
        </header>
    )
}
export default Header