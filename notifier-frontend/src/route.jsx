import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/auth";


// const Auth = lazy(() => import('./pages/auth'));


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Auth/>
      </Suspense>
    )
  }
]);

export default router