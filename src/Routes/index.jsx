import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyRoute from './MyRoute';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MyRoute IsClosed={false}>
                        <Home />
                    </MyRoute>
                }
            />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
