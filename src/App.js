import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HabitTodayPage from "./pages/HabitTodayPage/HabitTodayPage";
import HistoryOfHabitsPage from "./pages/HistoryOfHabitsPage/HistoryOfHabitsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImageProvider } from "./constants/ImageContext";

export default function App() {
  return (
    <ImageProvider>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} /> 
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<HabitTodayPage />} />
          <Route path="/historico" element={<HistoryOfHabitsPage />} />
        </Routes>
      </BrowserRouter>
    </ImageProvider>
  );
}


