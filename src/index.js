import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


import App from './App';
import BlogPage from './pages/BlogPage';

const router = createBrowserRouter([
  {
  path: "/",
  element:<App/>,
  },
  {
  path: "blog",
  element:<BlogPage/>,
  },

])
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

reportWebVitals();
