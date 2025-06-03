import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../components/Pages/home/HomePage";

import RootLayout from "./layouts/RootLayout";
import TeamPage from '../components/Pages/team/TeamPage';
import NotFound from "./layouts/NotFound";
import Service from '../components/Pages/service/Service';


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