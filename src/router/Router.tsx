import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../components/home/HomePage";

import RootLayout from "./layouts/RootLayout";
import TeamPage from '../components/team/TeamPage';
import NotFound from "../components/layouts/NotFound";
import Service from '../components/service/Service';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="service" element={<Service />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const RouteProvider = () => {
    return <RouterProvider router={router} />
}

export default RouteProvider;