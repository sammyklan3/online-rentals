import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/home/Home';
import { Dashboard } from './admin/dashboard/Dashboard';
import { Error } from './pages/error/Error';
import AddListingPage from './admin/create/AddListingPage';
import { UserManagement } from './admin/users/UserManagement';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Listings } from './admin/Listings/Lisitings';
import { Bookings } from './admin/bookings/Bookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/admin",
    element: <Dashboard />
  },
  {
    path: "/admin/create",
    element: <AddListingPage />
  },
  {
    path: "/admin/users",
    element: <UserManagement />
  },
  {
    path: "/admin/listings",
    element: <Listings />
  },
  {
    path: "/admin/bookings",
    element: <Bookings />
  },
  {
    path: "*",
    element: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
