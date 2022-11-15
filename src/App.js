import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Messenger from './components/Messenger/Messenger';
import NewPost from './components/NewPost/NewPost';
import UserPage from './components/UserPage/UserPage';
import HomeWrapper from './pages/HomeWrapper';

function App() {
  return (
    <>



    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<HomeWrapper/>}>
        <Route index element={<Main />} />
        <Route path='messenger' element={<Messenger />} />
        <Route path='newpost' element={<NewPost />} />
        <Route path='userpage' element={<UserPage />} />
      </Route>
    </Routes> 


    {/* <Routes>
      <Route path='/' element={<Main />} />
      <Route path='messenger' element={<Messenger />} />
      <Route path='login' element={<Login />} />
      <Route path='newpost' element={<NewPost/>} />
      <Route path='userpage' element={<UserPage />} />
    </Routes> */}


    </>
    );
}

export default App;
