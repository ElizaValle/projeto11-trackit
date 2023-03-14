import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" />
        <Route path="/habitos" />
        <Route path="/hoje" />
        <Route path="/historico" />
      </Routes>
    </BrowserRouter>
  );
}


