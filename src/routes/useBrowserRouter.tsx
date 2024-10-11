import LayoutLogin from "@components/Layout/LayoutLogin";
import Loading from "@components/Loading";
import PATH from "@routes/path";
import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router";

const Login = lazy(() => import("@src/pages/Auth/LoginPage"));
const ForgetPassword = lazy(() => import("@src/pages/Auth/ForgetPage"));
const ChangePassword = lazy(() => import("@src/pages/Auth/ChangePassword"));
const VerifyEmail = lazy(() => import("@src/pages/Auth/VerifyEmail"));

const useBrowserRouter = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Navigate to={PATH.AUTH} replace />,
    },
    {
      
      path: PATH.AUTH,
      element: <LayoutLogin />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: PATH.FORGET_PASSWORD,
          element: (
            <Suspense fallback={<Loading />}>
              <ForgetPassword />
            </Suspense>
          ),
        },
        {
          path: PATH.VERIFY_EMAIL,
          element: (
            <Suspense fallback={<Loading />}>
              <VerifyEmail />
            </Suspense>
          ),
        },
        {
          path: PATH.CHANGE_PASSWORD,
          element: (
            <Suspense fallback={<Loading />}>
              <ChangePassword />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return element;
};

export default useBrowserRouter;
