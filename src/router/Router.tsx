import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../components/pages/home/HomePage";

import RootLayout from "./layouts/RootLayout";
import NotFound from "./layouts/NotFound";
import ProductPage from "../components/pages/product/ProductPage";
import ServicePage from "../components/pages/service/ServicePage";
import PhilosophyPage from "../components/pages/philosophy/PhilosophyPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="philosophy" element={<PhilosophyPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const RouteProvider = () => {
    return <RouterProvider router={router} />
}

export default RouteProvider;