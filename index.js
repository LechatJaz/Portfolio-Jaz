import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'reset-css';
// import { Home } from './Home';
import { Home } from './src/component/Home';
import { ErrorPage } from './src/Error';

Aos.init({
  duration: 1000, // Durée de l'animation en millisecondes
  easing: 'ease-in-out', // Type d'animation
  once: true, // Si vrai, l'animation ne se produira qu'une seule fois lorsque l'élément sera visible
});

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
