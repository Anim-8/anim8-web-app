import React from 'react';
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "../components/pages_1/home/HomePage";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./layouts/NotFound";
import BlogListingPage from "../pages/blog/BlogListingPage";
import ArticlePage from "../pages/blog/ArticlePage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
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