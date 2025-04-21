import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";


const SignUp = lazy(() => import('./pages/SignUp'));


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

export default router