import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,         // This is the default route for "/"
        element: <Home />,
      },
      {
        path: 'admin',       // This handles "/admin"
        element: <Admin />,
      },
      {
        path: '*',           // This handles all unmatched routes (404)
        element: <NotFound />,
      },
    ],
  },
]);
