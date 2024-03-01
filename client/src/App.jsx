import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Employeerefferal from './pages/Employeerefferal'
import RecoverPass from './pages/RecoverPass';
import Header from './components/Header';
import Departments from './pages/Departments'
import Panel from './pages/Panel'
import Projects from './pages/Projects'
import Teams from './pages/Teams'
import Users from './components/Users'
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='recover-password' element={<RecoverPass/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/employeerefferal' element={<Employeerefferal />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/Panel' element={<Panel />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Teams' element={<Teams />} />
        <Route path='/Users' element={<Users />} />
       
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
