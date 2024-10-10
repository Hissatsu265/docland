import LayoutLogin from "@components/Layout/LayoutLogin";
import Loading from "@components/Loading";
import PATH from "@routes/path";
import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const Login = lazy(() => import("@src/pages/Auth/Login"));

const useBrowserRouter = () => {
  let element = useRoutes([
    {
      path: PATH.HOME,
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
      ],
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);

  return element;
};

export default useBrowserRouter;
