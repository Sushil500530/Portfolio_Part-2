import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/home/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path:'/',
                element: <Home />   
            }
        ]
    }
])

export default Router;