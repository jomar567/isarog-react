import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/index.css';
import './assets/css/isarog_adv.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/home';
import AboutPage from './pages/about';
import Hotels from './pages/hotels';
import Tour from './pages/tour';
import NoPage404 from './pages/nopage_404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/hotels/togawe-resort",
    element: <Hotels />,
  },
  {
    path: "/tour/caramoan-tour",
    element: <Tour />,
  },
  {
    path: "*",
    element: <NoPage404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);