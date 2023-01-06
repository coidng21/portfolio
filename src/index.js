import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './App';
import './style/style.css';
import AboutMe from './AboutMe';
import Project from './Project';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/AboutMe",
    element: <AboutMe/>
  },
  {
    path: "/Projects",
    element: <Project/>
  }, {
    path: "/Contact",
    element: <Contact/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


