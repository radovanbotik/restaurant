import {
  BookingPage,
  FrontPage,
  KitchenPage,
  MealPage,
  MenuPage,
  SelectedPage,
  RootLayout,
} from "./pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FrontPage />} />
      <Route path="kitchen" element={<KitchenPage />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="menu/:id" element={<MealPage />} />
      <Route path="selected" element={<SelectedPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
