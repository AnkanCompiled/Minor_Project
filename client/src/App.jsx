import React from "react";
import { DataProvider } from "./context/dataContext";
import MapRoutes from "./routes/MapRoutes";

export default function App() {
  return (
    <DataProvider>
      <MapRoutes />
    </DataProvider>
  );
}
