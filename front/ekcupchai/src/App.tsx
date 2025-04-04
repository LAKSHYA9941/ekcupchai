import { Routes, Route } from "react-router";

import Home from "./components/home";
import GetStarted from "./components/get_started";
import Navbar from "./components/navbar"; 
import "./App.css"; // Ensure Tailwind is working
import RootLayout from "./components/layouts";

type NavProps = {
  scrollToSection: (sectionId: string) => void;
};
const App = () => {

    return (
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route index element={<nav />} />
            <Route path="/get-started" element={<><GetStarted /></>} />
            <Route path="*" element={<>no chai here</>} />
          </Route>
        </Routes>
    );
};

export default App;
