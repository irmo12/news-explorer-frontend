import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ loggedIn }) {
  return (
    <Route>
      {loggedIn ? <Outlet /> : <Navigate to={"/"} />}
    </Route>
  );
}

export { ProtectedRoute }; 