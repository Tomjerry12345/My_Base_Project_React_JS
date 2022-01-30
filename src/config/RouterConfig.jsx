import React from "react";
import { Route, Routes } from "react-router-dom";
import ExamplesPages1 from "../pages/main/examples-page1/ExamplesPages1";
import ExamplesPages2 from "../pages/main/examples-page2/ExamplesPages2";
import ExamplesMain from "../pages/main/ExamplesMain";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<ExamplesMain />}>
        <Route path="examples-pages-1" element={<ExamplesPages1 />} />
        <Route path="examples-pages-2" element={<ExamplesPages2 />} />
      </Route>
    </Routes>
  );
}
