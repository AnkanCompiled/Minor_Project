import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoadingComponent from "../components/PageLoadingComponent";

const HomePage = lazy(() => import("../pages/HomePage"));
const AnalysisPage = lazy(() => import("../pages/AnalysisPage"));

export default function MapRoutes() {
  return (
    <Router>
      <Suspense fallback={<PageLoadingComponent />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<AnalysisPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
