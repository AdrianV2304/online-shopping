import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// In Main Package Pages
import Loading from "pages/loading";

import { SITE_ROUTES } from "shared/js";

// Loaded Pages
const Homepage = lazy(() => import("pages/homepage"));
const Checkout = lazy(() => import("pages/checkout"));
const Page404 = lazy(() => import("pages/notfound"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={SITE_ROUTES.homepage} element={<Homepage />} />
          <Route path={SITE_ROUTES.checkout} element={<Checkout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
