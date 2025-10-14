import React from 'react';
import { createRoutesFromElements, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages_1/home/HomePage";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./layouts/NotFound";
import BlogListingPage from "../pages/blog/BlogListingPage";
import ArticlePage from "../pages/blog/ArticlePage";
import ProductPage from '../components/pages_1/product/ProductPage';
import ServicePage from '../components/pages_1/service/ServicePage';
import PhilosophyPage from '../components/pages_1/philosophy/PhilosophyPage';
import PistRampSimulator from '../components/simulator/PistRampSimulator';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="philosophy" element={<PhilosophyPage />} />
            <Route path="simulators" element={<PistRampSimulator/>} />
            <Route path="blog">
                <Route index element={<BlogListingPage />} />
                <Route path=":slug" element={<ArticlePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const RouteProvider = () => {
    return <RouterProvider router={router} />
}

export default RouteProvider;