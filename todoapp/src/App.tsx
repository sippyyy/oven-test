import React from "react";
import {
  Home,
  CategoryPage,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ReusableModal } from "./components";
import NormalLayout from "./layout/NormalLayout";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "./themes";
import TodoProvider from "./context/TodoProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<NormalLayout />}>
        <Route index element={<Home />} />
        <Route path=":category" element={<CategoryPage />} />
      </Route>
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <TodoProvider>
        <RouterProvider router={router} />
        <ReusableModal />
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
