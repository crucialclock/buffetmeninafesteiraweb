import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ],
    {
        basename: routerBasename,
    },
);

export default function App() {
    return <RouterProvider router={router} />;
}
