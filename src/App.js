import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PMultiplierTab from './components/PMultiplierTab';
import SearchComponent from './components/SearchComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchComponent />,
  },
  {
    path: '/pmultiplier',
    element: <PMultiplierTab />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
