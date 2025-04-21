import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/auth";


const Home = lazy(() => import('./pages/Home'));

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

export default router;
