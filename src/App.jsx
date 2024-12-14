import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';

/* function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
} 

export default App; */

import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Configure the router with future flags enabled
const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> }, 
    { path: "/about", element: <About /> },
    { path: "/housing/:id", element: <Housing /> },
    { path: "*", element: <NotFound /> }, 
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enables relative paths in nested routes
      v7_fetcherPersist: true,   // Retains fetcher state during navigation
      v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
      v7_partialHydration: true, // Supports partial hydration for server-side rendering
      v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
    },
  }
);

function App() {
  return (
    <RouterProvider
      future={{ v7_startTransition: true }} // Enables React's startTransition API
      router={router}
    />
  );
}

export default App;
