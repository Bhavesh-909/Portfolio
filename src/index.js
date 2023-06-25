import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from react - router - dom;

const router = createBrowserRouter([{
  path: "/",
  element:<div>Hello World</div>
},
])
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router ={router}/> */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
