import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Landing from "../components/home/Landing";
import Service from "../components/service/Service";
import RootLayout from "./layouts/RootLayout";
import NotFound from "../components/layouts/NotFound";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Landing />} />
            <Route path="service" element={<Service />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const RouteProvider = () => {
    return <RouterProvider router={router} />
}

export default RouteProvider;