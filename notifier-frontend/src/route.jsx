import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";




const Auth = lazy(() => import('./pages/auth'));
const Dashboard = lazy(() => import('./pages/Dashboard'));


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    )
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    )
  },

]);

export default router