import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Auth = lazy(() => import('./pages/auth'));
 const Dashboard = lazy(() => import('./pages/Dashboard'));
const LandingPage = lazy(() => import('./pages/LandingPage'));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage/>
      </Suspense>
    ),
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard/>
      </Suspense>
    ),
  },

]);

export default router