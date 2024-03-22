import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import { Dashboard } from './admin/dashboard/Dashboard';
import { Error } from './pages/error/Error';
import AddListingPage from './admin/create/AddListingPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },

  {
    path: "/admin",
    element: (<Dashboard />)
  },
  {
    path: "/admin/create",
    element: (<AddListingPage />)
  },

  {
    path: "*",
    element: (<Error />),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
