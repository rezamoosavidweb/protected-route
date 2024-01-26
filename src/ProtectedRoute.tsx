import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute({auth}:{auth:boolean}) {
    const location = useLocation()
    if (!auth) {
        return <Navigate to={"/signin"} replace />;
      }
  
      return <Outlet key={location.pathname}/>;
}
