import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";


const Home = lazy(() => import('./pages/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp/>
      </Suspense>
    )
  }
]);

export default router;
