import { Route, Routes} from 'react-router-dom'
import Home from '../page/Home';
import Admin from '../page/admin';
import NotFound from '../page/404';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/admin' element={<Admin/>}/>
            <Route exact path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default AppRoutes;
