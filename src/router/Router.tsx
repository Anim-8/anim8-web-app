import { createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages_1/home/HomePage.tsx";

import RootLayout from "./layouts/RootLayout";
import NotFound from "./layouts/NotFound";
import ProductPage from "../components/pages_1/product/ProductPage.tsx";
import ServicePage from "../components/pages_1/service/ServicePage.tsx";
import PhilosophyPage from "../components/pages_1/philosophy/PhilosophyPage.tsx";
import PistRampSimulator from "../components/simulator/PistRampSimulator.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="philosophy" element={<PhilosophyPage />} />
            <Route path="simulators" element={<PistRampSimulator/>} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const RouteProvider = () => {
    return <RouterProvider router={router} />
}

export default RouteProvider;