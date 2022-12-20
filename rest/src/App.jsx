import {
  BookingPage,
  FrontPage,
  KitchenPage,
  MealPage,
  MenuPage,
  RootLayout,
} from "./pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FrontPage />} />
      <Route path="kitchen" element={<KitchenPage />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="menu/:id" element={<MealPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
