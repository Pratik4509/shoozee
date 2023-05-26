import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import AppProducts from './components/AllProducts/AppProducts';
import Home from './components/Home';
import Product from './components/Product.jsx/Product';
import { store } from './store/store';
import { Provider } from 'react-redux';
import "@stripe/stripe-js";
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "all-products",
    element: <AppProducts />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);




function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
