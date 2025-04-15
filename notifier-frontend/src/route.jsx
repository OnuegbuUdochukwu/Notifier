import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


const Home = lazy(() => import('./pages/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    )
  }
]);

export default router;
