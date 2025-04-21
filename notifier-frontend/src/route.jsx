import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";


const SignUp = lazy(() => import('./pages/SignUp'));


const router = createBrowserRouter([
    {
        path : '/',
        element : (
            <Suspense>
                <SignUp/>
            </Suspense>
        )
    }
]);

export default router