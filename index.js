import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'reset-css';
// import { Home } from './Home';
import { Home } from './src/component/Home';
import { ErrorPage } from './src/Error';

const createRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <RouterProvider router={createRouter} />,
);
