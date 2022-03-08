import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { FirstPage } from "./FirstPage";
import { SignIn } from "./SignIn";

export function App() {
  return (
    <div className="App sab">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<FirstPage />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
