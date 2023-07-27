import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeRoute from "./routes/Home";
import PageNotFoundRoute from "./routes/PageNotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="*" element={<PageNotFoundRoute />} />
      </Routes>
    </>
  );
}
